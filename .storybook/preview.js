import '../src/main.js';
import '../src/styles/main.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (storyFn, context) => {
      const componentName = context.name;
      const version = context.parameters.version || '1.0.0';
      return `<!-- Start of ${componentName} v${version} -->${storyFn()}<!-- End of ${componentName} v${version} -->`;
    },
  ],
};

export default preview;
