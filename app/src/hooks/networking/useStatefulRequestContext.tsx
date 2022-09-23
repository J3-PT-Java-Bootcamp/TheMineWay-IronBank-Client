import { Context, useContext } from "react";
import { StatefulRequestContext } from "./useStatefulRequest";

export function useStatefulRequestContext<T>(context: Context<StatefulRequestContext<T>>) {
    const {
        response,
        refetch
    } = useContext(context)!;

    return {
        data: response.data,
        response,
        status: response.status,
        refetch,
    };
}