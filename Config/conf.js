//protractor Config\conf.js --cucumberOpts.tags @tagname or protractor Config\conf.js --cucumberOpts.profile Name

exports.config = {
  framework: 'custom',  // set to "custom" instead of cucumber.
  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
  // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  getPageTimeout: 80000,
  allScriptsTimeout: 50000,
  capabilities: {
    browserName: 'chrome',
  },
  specs: [
    '../Cases/Feature/*.feature'     // Specs here are the cucumber feature files
  ],
  cucumberOpts: {
    compiler: [],
    require: ['../Cases/Steps/*.js','../Util/timeouts.js'],
    strict  : true,
    dryRun  : false,
    tags    : []
  },

  onPrepare: function () {
    browser.manage().window().maximize(); // maximize the browser before executing the feature files
    browser.waitForAngular(false);
  }
};
