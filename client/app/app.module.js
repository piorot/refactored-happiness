(function () {
    "use strict";
    angular
        .module('app', ['ngMaterial', 'ui.router', 'toolbar'])
        .config(['$logProvider', '$stateProvider', '$locationProvider', function($logProvider, $stateProvider, $locationProvider){
            //$logProvider,debugEnabled(true);

            $stateProvider
            .state('home', {
                url: '/',
                template: '<h1>This is an inline template</h1>'
            })
            .state('ddd', {
                url: '/ddd',
                template: '<h1>This is an inline ddd template</h1>'
            });

            $locationProvider.hashPrefix('');

        }])
        .run(['$rootScope', '$state', function($rootScope, $state) { $rootScope.$state = $state; }]);
})();