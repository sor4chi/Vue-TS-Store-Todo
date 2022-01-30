module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/Vue-TS-Store-Todo/" : "/",
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [],
    },
  },
};
