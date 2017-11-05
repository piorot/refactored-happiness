(function () {
    "use strict";
    angular
        .module('app', ['ngMaterial', 'ui.router', 'toolbar', 'menu', 'people', 'projects'])
        .constant('baseBackendUrl', 'https://refactored-happiness-api.herokuapp.com')
        .constant('imgCatalog', 'img')
        .config(['$logProvider', '$stateProvider', '$locationProvider', '$urlRouterProvider', function ($logProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/projects');
            $stateProvider
                .state('peopleList', {
                    url: '/people',
                    templateUrl: '/app/people/templates/people-list.template.html',
                    controller: 'PeopleListController',
                    controllerAs: 'peopleList'
                })
                .state('peopleDetails', {
                    'url': '/people/:id',
                    templateUrl: '/app/people/templates/people-details.template.html',
                    controller: 'PeopleDetailsController',
                    controllerAs: 'peopleDetails'
                })
                .state('teams', {
                    url: '/teams',
                    templateUrl: '/app/teams/teams.template.html',
                    controller: 'TeamsController',
                    controllerAs: 'teams'
                })
                .state('projects', {
                    url: '/projects',
                    templateUrl: '/app/projects/templates/projects-list.template.html',
                    controller: 'ProjectsListController',
                    controllerAs: 'projectsList'
                })
                .state('projectsDetails', {
                    url: '/project/:id',
                    templateUrl: '/app/projects/templates/project-details.template.html',
                    controller: 'ProjectDetailsController',
                    controllerAs: 'projectDetails'
                });

            $locationProvider.hashPrefix('');

        }]);
        


})();