/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["..\\public"],
};
export default config;






// const path = require("path");

// module.exports = {
//   stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/preset-create-react-app",
//   ],

//   webpackFinal: async (config) => {
//     config.module.rules.push({
//       test: /\.css$/,
//       use: [
//         {
//           loader: "postcss-loader",
//           options: {
//             ident: "postcss",
//             plugins: [require("tailwindcss"), require("autoprefixer")],
//           },
//         },
//       ],
//       include: path.resolve(__dirname, "../"),
//     });
//     return {
//       ...config,
//       plugins: config.plugins.filter((plugin) => {
//         if (plugin.constructor.name === "ESLintWebpackPlugin") {
//           return false;
//         }
//         return true;
//       }),
//     };
//   },

//   framework: {
//     name: "@storybook/react-webpack5",
//     options: {}
//   },

//   docs: {
//     autodocs: true
//   }
// };
