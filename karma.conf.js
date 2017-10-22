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
      'app/people/people.controller.js',
      'app/people/people.service.js',
      'app/people/people-list-resolver.service.js',
      'app/projects/projects.module.js',
      'app/teams/teams.module.js',
      'app/**/*.js',

    ],

    autoWatch: true,

    frameworks: ['mocha', 'sinon-chai'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      require('karma-mocha'),
      require('karma-sinon-chai'),
      require('karma-coverage')

    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    reporters: ['progress', 'coverage'],
    preprocessors: {

      'app/people/people.controller.js': ['coverage']
    },
    // optionally, configure the reporter
    coverageReporter: {
      reporters: [
        // generates ./coverage/lcov.info
        { type: 'lcovonly', subdir: 'coverage2/' },
        // generates ./coverage/coverage-final.json
        { type: 'json', subdir: 'coverage3/' },
        {type: 'html',dir: 'coverage/'}
      ]

    }

  });
};
