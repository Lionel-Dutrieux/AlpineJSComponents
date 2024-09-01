const path = require('path');

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)", "../tailwind.config.js"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-a11y",
    "storybook-addon-tailwind-autodocs",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
};
export default config;
