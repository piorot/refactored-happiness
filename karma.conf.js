//jshint strict: false
module.exports = function (config) {
  config.set({

    basePath: './client',

    files: [
      "bower_components/angular/angular.js",
      "bower_components/angular-aria/angular-aria.js",
      "bower_components/angular-animate/angular-animate.js",
      "bower_components/angular-material/angular-material.js",
      "bower_components/angular-messages/angular-messages.js",
      "bower_components/angular-messages/angular-messages.js",
      "bower_components/angular-ui-router/release/angular-ui-router.js",
      'bower_components/angular-mocks/angular-mocks.js',
      'app/app.module.js',
      'app/menu/menu.module.js',
      'app/toolbar/toolbar.module.js',
      'app/people/people.module.js',
      'app/projects/projects.module.js',
      'app/teams/teams.module.js',
      'app/**/*.js',
      'app/*/*.js',
      'app/**/*.html',

    ],

    autoWatch: true,

    frameworks: ['mocha', 'sinon-chai'],

    browsers: ['Chrome'],

    

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    reporters: ['progress', 'coverage'],
    preprocessors: {

      'app/**/!(*.spec).js': ['coverage'],
      'app/**/*.html': ['ng-html2js']


    },
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-ng-html2js-preprocessor',
      require('karma-mocha'),
      require('karma-sinon-chai'),
      require('karma-coverage')

    ],
    ngHtml2JsPreprocessor: {
      stripPrefix: './app/',
      moduleName: 'templates'
    },
    // optionally, configure the reporter
    coverageReporter: {
      reporters: [
        // generates ./coverage/lcov.info
        { type: 'lcovonly', subdir: './' },
        // generates ./coverage/coverage-final.json
        { type: 'json', subdir: './' },
        { type: 'html', dir: 'coverage/' }
      ]

    }

  });
};
