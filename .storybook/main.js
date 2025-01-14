/** @type { import('@storybook/react-webpack5').StorybookConfig | import('@storybook/vue3-vite').StorybookConfig } */
const config = {
    stories: [
        '../src/**/*.mdx',
        '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
    ],
    core: {
        disableTelemetry: true, // 👈 Disables telemetry
    },
    framework: {
        name: (process.env.STORYBOOK_FRAMEWORK === 'vue') ? '@storybook/vue3-vite' : '@storybook/react-webpack5',
        options: {},
    },
};
export default config;