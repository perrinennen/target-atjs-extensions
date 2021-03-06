// Karma configuration

module.exports = function (config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'jasmine'
    ],

    reporters: [
      'spec',
      'coverage'
    ],

    preprocessors: {
      'src/**/*.js': ['coverage'],
      'test/*.html': ['ng-html2js']
    },

    // list of files / patterns to load in the browser
    files: [
      'node_modules/angular/angular.js',
      'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'test/**/*.testutil.js',
      '../common/dist/at-angular-common-!(*.min).js',
      'src/**/*.js',
      'test/**/*.spec.js',
      'test/*.html'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-spec-reporter',
      'karma-jasmine-textio-html-reporter',
      'karma-ng-html2js-preprocessor'
    ],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'html', subdir: '.'}
      ]
    },

    // Continuous Integration mode
    // if true, it captures browsers, run tests and exit
    singleRun: true,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
