import { useState } from "react";

type Options<T, K> = {
    action: (v: T) => Promise<K>;
}

export function useLoading<T, K = any>(options: Options<T, K>) {

    const [loading, setLoading] = useState<boolean>(false);

    const doAction = async (v: T) => {
        setLoading(true);
        try {
            const result = await options.action(v);
            setLoading(false);
            return result;
        } catch(e: any) {
            setLoading(false);
            throw e;
        }
    }

    return {
        loading,
        doAction,
    }
}