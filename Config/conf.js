//protractor Config\conf.js --cucumberOpts.tags @tagname or protractor Config\conf.js --cucumberOpts.profile Name

exports.config = {
  framework: 'custom',  // set to "custom" instead of cucumber.
  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
  // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  getPageTimeout: 80000,
  allScriptsTimeout: 50000,

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
        args: ['disable-infobars']
    },
    // Add this
    metadata: {
        browser: {
            name: 'chrome',
            version: '58'
        },
        device: 'Desktop',
        platform: {
            name: 'Windows',
            version: '10'
        }
    }
  },

  specs: [
    '../Cases/Feature/*.feature'     // Specs here are the cucumber feature files
  ],

  cucumberOpts: {
    compiler: [],
    require: ['../Cases/Steps/*.js', '../Util/timeouts.js'],
    strict: true,
    format: 'json:./Reports/jsonReports/results.json',
  },

  plugins: [{
    //Configuring the reportor here
    package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
    options:{
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true,
        removeOriginalJsonReportFile:true,
        jsonOutputPath: './Reports/jsonReports',
        customData: {
          title: 'CID Test Report',
          data: [
              {label: 'Project', value: 'Custom project'},
              {label: 'Release', value: '1.2.3'},
              {label: 'Cycle', value: 'B11221.34321'}
          ]
      },
      reportPath:'./Reports/htmlReports'
    }
}],

  onPrepare: function () {
    browser.manage().window().maximize(); // maximize the browser before executing the feature files
    browser.waitForAngularEnabled(false);
  }
};
