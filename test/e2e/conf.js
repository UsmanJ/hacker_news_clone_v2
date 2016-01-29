exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['hackerNewsCloneAppFeature.js'],
  capabilities: {
    browserName: 'chrome'
  }
}
