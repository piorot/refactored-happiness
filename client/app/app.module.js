(function () {
    "use strict";
    angular
        .module('app', ['ngMaterial', 'ui.router', 'toolbar', 'menu', 'people', 'projects', 'teams'])
        .constant('baseBackendUrl','http://localhost:2403')
        .config(['$logProvider', '$stateProvider', '$locationProvider', function ($logProvider, $stateProvider, $locationProvider) {
            //$logProvider,debugEnabled(true);

            $stateProvider
                .state('home', {
                    url: '/',
                    template: '<h1>This is an inline template</h1>',
                })
                .state('people', {
                    url: '/people',
                    templateUrl: '/app/people/people-list.template.html',
                    controller: 'PeopleListController',
                    controllerAs: 'peopleList'
                })
                .state('teams', {
                    url: '/teams',
                    templateUrl: '/app/teams/teams.template.html',
                    controller: 'TeamsController',
                    controllerAs: 'teams'
                })
                .state('projects', {
                    url: '/projects',
                    templateUrl: '/app/projects/projects.template.html',
                    controller: 'ProjectsController',
                    controllerAs : 'projects'
                });

            $locationProvider.hashPrefix('');

        }])
        
        
})();