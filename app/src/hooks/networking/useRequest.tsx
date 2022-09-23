import { AxiosResponse } from "axios";
import { useAuth } from "../../providers/authentication/AuthenticationProvider";
import { RequestOptions } from "../../services/networking/requester";
import { request as requestFunction } from '../../services/networking/requester';
import { HttpException } from "../../services/networking/types/HttpException";
import { Error, useError } from "../errors/useError";

export type UseRequestOptions = {
    requestOptions?: RequestOptions;
    handleErrors?: boolean;
}

type HandledRequestOptions<T, R> = {
    onSuccess?: (response?: AxiosResponse<T>) => Promise<R>;
    onError?: (error: HttpException) => Promise<R>;
}

export default function useRequest() {

    const { showError } = useError();

    const {
        authContext,
    } = useAuth();

    async function request<T>(url: string, options?: UseRequestOptions) {
        try {
            return await requestFunction<T>(url, {
                authToken: options?.requestOptions?.authToken ?? authContext?.authToken,
                ...options?.requestOptions,
            });
        } catch (e: any) {

            const error: Error = e ?? { statusCode: 500 };

            if (!(options?.handleErrors === false)) {
                showError(error);
            }
            throw e;
        }
    }

    async function handledRequest<T, R = T | void>(url: string, options?: UseRequestOptions, handledRequestOptions?: HandledRequestOptions<T, R>) {
        try {
            const response = await request<T>(url, {
                ...options,
            });
            return handledRequestOptions?.onSuccess && !!response && await handledRequestOptions.onSuccess(response);
        } catch (e: any) {
            return handledRequestOptions?.onError && await handledRequestOptions.onError(e as HttpException);
        }
    }

    return {
        request,
        handledRequest,
    };
}

export class PaginatedResponse<T> {
    count!: number;
    rows!: T[];
}