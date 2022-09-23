import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "../../hooks/cookies/useCookies";
import { AuthContextModel } from "../../models/authentication/AuthContext.model";
import { add } from "date-fns";

const AuthenticationContext = createContext<{
    authContext?: AuthContextModel | null,
    setAuthContext: (authContext?: AuthContextModel, options?: {
        remember?: boolean;
    }) => void;
}>({
    setAuthContext: () => { },
});

type Props = {
    children: JSX.Element | JSX.Element[];
}

export default function AuthenticationProvider(props: Props) {

    const { setCookie, getCookie, removeCookie } = useCookies();
    const [authState, setAuthState] = useState<AuthContextModel | null | undefined>(null);

    useEffect(() => {
        const authToken = getCookie<string>("authToken");
        setAuthState(!!authToken ? {
            authToken,
        } : undefined);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AuthenticationContext.Provider
            value={{
                authContext: authState,
                setAuthContext: (authContext, options) => {
                    if (authContext) {
                        if (options?.remember) setCookie("authToken", authContext.authToken, { expires: add(new Date(Date.now()), { days: 30 }) });
                    } else {
                        removeCookie("authToken");
                    }

                    setAuthState(authContext);
                },
            }}
        >
            {props.children}
        </AuthenticationContext.Provider>
    );
}

export function useAuth() {
    const authContext = useContext(AuthenticationContext);

    return authContext;
}