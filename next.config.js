const { GenerateSW } = require('workbox-webpack-plugin');
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
});

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development",
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // Ensure GenerateSW is not called multiple times
            const existingGenerateSW = config.plugins.find(plugin => plugin instanceof GenerateSW);
            if (!existingGenerateSW) {
                config.plugins.push(
                    new GenerateSW({
                        clientsClaim: true,
                        skipWaiting: true,
                    })
                );
            }
        }
        return config;
    },
};

module.exports = withPWA(nextConfig);
