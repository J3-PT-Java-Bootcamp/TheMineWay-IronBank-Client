import axios, { AxiosError, AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { ExceptionSection } from "./types/HttpException";
import { RequestHeader } from "./types/RequestHeader";
import { RequestMethod } from "./types/RequestMethod";
import { RequestProtocol } from "./types/RequestProtocol";

export type RequestOptions = {
    apiRoute?: string;
    host?: string;
    protocol?: RequestProtocol;
    port?: number;
    method?: RequestMethod;
    payload?: Object;
    headers?: RequestHeader[];
    authToken?: string;
    rawUrl?: boolean;
    ignoreErrors?: IgnoreError[];
    pagination?: RequestPagination;
    sort?: RequestSort;
}

export class RequestPagination {
    offset?: number;
    limit?: number;
}

export type RequestSort = [string, 'ascend' | 'descend'][];

export type IgnoreError = { section?: ExceptionSection, code?: number };

export async function request<T>(route: string, requestOptions?: RequestOptions) {

    const options = requestOptions ?? {};

    const protocol = options.protocol ?? RequestProtocol.http; // TODO: change to HTTPS
    const host = options.host ?? 'localhost';
    const port = options.port ?? 4000;

    const url = options.rawUrl ? route : `${protocol}://${host}:${port}${options.apiRoute ? `/${options.apiRoute}` : ''}/${route}`;

    // Format headers
    const headers: AxiosRequestHeaders = {};
    for (const header of options.headers ?? []) {
        headers[header.header] = `Bearer ${header.value}`;
    }

    // Set auth header
    if (options.authToken) headers['Authorization'] = 'Bearer ' + options.authToken;

    // Create axios config
    const axiosConfig: AxiosRequestConfig = {
        url,
        method: options.method ?? RequestMethod.get,
        params: {
            ...options.pagination,
            orderBy: options.sort,
        },
        data: options.payload,
        headers: {
            ...headers,
        },
    };

    try {
        // Send request
        const result = await axios.request<T>(axiosConfig);
        return result;
    } catch (e: any) {
        const error: AxiosError<{
            statusCode: number;
            section: ExceptionSection;
        }> = e;

        const status = error.response?.status;

        if (status && options.ignoreErrors) {
            for (const ignoreError of options.ignoreErrors) {
                if ((!ignoreError.code || ignoreError.code === error.response?.data.statusCode) && (!ignoreError.section || error.response?.data.section === ignoreError.section)) return undefined;
            }
        }

        throw error.response?.data;
    }
}