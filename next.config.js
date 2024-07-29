const { GenerateSW } = require('workbox-webpack-plugin');
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
});

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development",
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.plugins.push(
                new GenerateSW({
                    clientsClaim: true,
                    skipWaiting: true,
                })
            );
        }
        return config;
    },
};

module.exports = withPWA(nextConfig);
