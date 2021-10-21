module.exports = {
  resource: {
    test: /(\.png|\.jpg)/,
    type: 'asset/resource',
  },
  inline: {
    test: /\.svg/,
    type: 'asset/inline',
  },
  source: {
    test: /\.txt/,
    type: 'asset/source',
  },
};
