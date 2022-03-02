module.exports = {
  inputDir: './src/assets', // (required)
  outputDir: './dist/assets/json', // (required)
  fontTypes: [],
  assetTypes: ['json'],
  name: 'assets',
  prefix: 'assets',
  normalize: true,
  formatOptions: {
    json: {
      indent: 2
    },
    ts: {
      types: ['constant', 'literalId'],
      singleQuotes: true
    }
  }
};
