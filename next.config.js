module.exports = {
    webpack: (config, { isServer }) => {
        // If the sitemap generation is not required comment out/remove the if-condition
        if (isServer) {
            require('./scripts/generate-sitemap');
        }

        config.module.rules.push({
            test: /__tests__\/.*\.jsx?$/,
            loader: 'ignore-loader'
        });

        return config;
    }
};