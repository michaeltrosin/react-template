module.exports = {
  resource: {
    test: /\.png|\.jpe{0,1}g/,
    type: 'asset/resource',
  },
  inline: {
    // test: /\.svg/,
    // type: 'asset/inline',
  },
  source: {
    test: /\.txt|\.traineddata/,
    type: 'asset/source',
  },
  svg: {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }, 
  fallback: {
    'stream': false,
    'fs': false,
    'path': false,
  }
};
