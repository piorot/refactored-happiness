(function () {
    "use strict";
    angular
        .module('app', ['ngMaterial', 'ui.router', 'menu', 'toolbar'])
        .config(['$logProvider', '$stateProvider', '$locationProvider', function($logProvider, $stateProvider, $locationProvider){
            //$logProvider,debugEnabled(true);

            $stateProvider
            .state('home', {
                url: '/',
                template: '<h1>This is an inline template</h1>'
            });

            $locationProvider.hashPrefix('');

        }])
})();