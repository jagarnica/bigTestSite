const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/components/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },

  webpackFinal: async (config) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[0].use[0].options.plugins.push(
      require.resolve("babel-plugin-remove-graphql-queries")
    );

    // copied webpack from ChakraUI
    config.resolve.alias = {
      ...config.resolve.alias,
      // used for root imports
      components: toPath("src/components"),
      "@emotion/core": toPath("node_modules/@emotion/react"),
      "emotion-theming": toPath("node_modules/@emotion/react"),
    };
    return config;
  },
};
