/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [],    // Add any external domains if required
    },
    // Add these configurations
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true
    }
};

export default nextConfig;
