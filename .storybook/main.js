import { resolve } from 'path';

const config = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    // Add path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname, '../src'),
      '@components': resolve(__dirname, '../src/components'),
      '@contexts': resolve(__dirname, '../src/contexts'),
      '@services': resolve(__dirname, '../src/services'),
      '@utils': resolve(__dirname, '../src/utils'),
      '@styles': resolve(__dirname, '../src/styles'),
      '@assets': resolve(__dirname, '../src/assets'),
      '@hooks': resolve(__dirname, '../src/hooks'),
      '@constants': resolve(__dirname, '../src/constants'),
    };

    // SCSS configuration
    if (config.css?.preprocessorOptions) {
      config.css.preprocessorOptions.scss = {
        additionalData: `
          @import "@styles/variables";
          @import "@styles/mixins";
        `,
        includePaths: [resolve(__dirname, '../src/styles')],
      };
    }

    return config;
  },
};

export default config;