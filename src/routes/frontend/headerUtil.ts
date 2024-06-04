export const CANONICAL_URL = `https://www.enquetrabajas.com`;
export const getCanonicalHeader = (path: string) => {
    return ['Link', `<${CANONICAL_URL}${path}>; rel="canonical"`];
};

export const getCspHeader = () => {
    const nonce = Math.floor(Math.random() * 10000).toString();

    return {
        nonce,
        csp: [
            'Content-Security-Policy',
            ` default-src 'self'; script-src 'nonce-${nonce}';style-src 'self'; font-src 'self; img-src 'self'; frame-src 'self';`,
        ],
    };
};
