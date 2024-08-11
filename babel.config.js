module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".android.js",
            ".android.tsx",
            ".ios.js",
            ".ios.tsx",
          ],
          root: ["./src"],
          alias: {
            assets: "./assets",
            components: "./src/components",
            config: "./src/config",
            containers: "./src/containers",
            interfaces: "./src/interfaces",
            navigation: "./src/navigation",
            screens: "./src/screens",
            services: "./src/services",
            stores: "./src/stores",
            types: "./src/types",
            utils: "./src/utils",
          },
        },
      ],
    ],
  };
};
