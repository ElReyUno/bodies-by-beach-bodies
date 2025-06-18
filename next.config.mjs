/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    images: {
        domains: [],    // Add any external domains if required
    },
    // Add these configurations
    reactStrictMode: true,
    output: 'export',
    basePath: isProd ? '/bodies-by-beach-bodies' : '',
    assetPrefix: isProd ? '/bodies-by-beach-bodies' : '',
};

export default nextConfig;
