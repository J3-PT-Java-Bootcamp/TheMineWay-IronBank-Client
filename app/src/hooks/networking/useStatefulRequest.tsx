import { AxiosError, AxiosResponse } from "axios";
import { RequestOptions } from "../../services/networking/requester";
import useRequest, { UseRequestOptions } from "./useRequest";
import { useQuery } from '@tanstack/react-query';
import Loading from "../../components/shared/common/Loading";
import { Context } from "react";

export type Result<T> = {
    axiosResponse?: AxiosResponse<T>,
    error?: AxiosError,
}

export type UseStatefulRequestOptions<T> = {
    url: string;
    requestOptions?: RequestOptions;
    useRequestOptions?: Omit<UseRequestOptions, 'requestOptions'>;
    hideLoadingOnRender?: boolean;
    context?: Context<StatefulRequestContext<T>>;
}

export function useStatefulRequest<T = Object>(requestOptions: UseStatefulRequestOptions<T>) {

    const {
        request,
    } = useRequest();

    const {
        data,
        isLoading,
        isRefetching,
        refetch,
    } = useQuery([requestOptions.url], () => fetch(), {
        cacheTime: 0,
    });

    const fetch = async () => {
        return await request<T>(requestOptions.url, requestOptions);
    }

    const OnFetchFinished = (props: { render?: (data: AxiosResponse<T>) => JSX.Element; }) => {
        if (isLoading) return <Loading />;
        const ToRender = () => (
            <>
                {props.render && data && props.render(data)}
            </>
        );

        if (!data) return <></>;

        if (requestOptions.context) {
            return (
                <requestOptions.context.Provider
                    value={{
                        response: data,
                        refetch: async () => {
                            await refetch();
                        },
                    }}
                >
                    <ToRender />
                </requestOptions.context.Provider>
            );
        }

        return <ToRender />;
    }

    return {
        isLoading,
        isRefetching,
        data,
        refetch,
        OnFetchFinished,
    };
}

export type StatefulRequestContext<T> = {
    response: AxiosResponse<T>;
    refetch: () => Promise<void>;
} | null;