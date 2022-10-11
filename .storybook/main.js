const path = require('path');
const {withStorybookModuleFederation} = require('storybook-module-federation');
const storybookConfig = {
  "framework": "@storybook/web-components",
  "stories": [
    '../src/**/*.stories.mdx',
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-scss',
    '@storybook/theming',
    '@storybook/addon-storyshots',
    "@storybook/addon-a11y",
    "storybook-stylesheet-toggle"
  ],
  core: {
    builder: "webpack5",
    options: {
      fsCache: false,
    },
  },
  webpackFinal: async (config, { configType }) => {
    // find web-components rule for extra transpilation
    const webComponentsRule = config.module.rules.find(
      (rule) => rule.use && rule.use.options && rule.use.options.babelrc === false
    );
    // add your own `my-library`
    webComponentsRule.test.push(new RegExp(`node_modules(\\/|\\\\)lit-html(.*)\\.js$`));
    
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '..', 'node_modules'),
    });
    return config;
  },
}




const moduleFederationConfig = {
  name: 'styleguide',
  filename: 'dtk/remoteEntry.js',
  exposes: {
    './BaseStyles': '/src/assets/global.css',
  },
};



module.exports = withStorybookModuleFederation(moduleFederationConfig)(
  storybookConfig
);