export default class URLHelper {

    private static checkDomain = function (url: string) {
        if (url.indexOf('//') === 0) { url = window.location.protocol + url; }
        return url.toLowerCase().replace(/([a-z])?:\/\//, '$1').split('/')[0];
    };

    private static isExternal = function (url: string) {
        return ((url.indexOf(':') > -1 || url.indexOf('//') > -1) && URLHelper.checkDomain(window.location.href) !== URLHelper.checkDomain(url));
    };

    static isInternalUrl(url: string): boolean {
        return !this.isExternal(url);
    }

    static isExternalUrl(url: string): boolean {
        return this.isExternal(url);
    }

    static openURL(url: string, options?: { newWindow?: boolean }) {
        window.open(url, options?.newWindow ? '_blank' : '');
    }
}