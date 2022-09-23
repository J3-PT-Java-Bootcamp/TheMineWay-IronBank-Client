const { useCookies: uCookies } = require("react-cookie");

type CookieCreateOptions = {
    expires?: Date;
}

export function useCookies(): {
    cookies: Object;
    setCookie: (name: string, value: Object, options?: CookieCreateOptions) => void;
    removeCookie: (name: string) => void;
    getCookie: <T>(name: string) => T | undefined;
} {
    const [cookies, setCookie, removeCookie] = uCookies();

    const getCookie = <T>(name: string) => {
        return (cookies[name] as T) ?? undefined;
    }

    return {
        cookies,
        setCookie,
        removeCookie,
        getCookie,
    }
}