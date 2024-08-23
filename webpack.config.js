module.exports = {
    // Other configurations...
    module: {
      rules: [
        {
          test: /\.json$/,
          loader: 'json-loader',
          type: 'javascript/auto'
        }
        // Other rules...
      ]
    }
};
  