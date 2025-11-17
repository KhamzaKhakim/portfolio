module.exports = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              // typescript: true,
              // dimensions: false,
            },
          },
        ],
        as: "*.tsx",
      },
    },
  },
};
