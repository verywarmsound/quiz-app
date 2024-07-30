const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development",
    },
    webpack: (config, { isServer }) => {
        return config;
    },
};

module.exports = nextConfig;
