(function () {
    "use strict";
    angular.module("people")
        .factory("projectsService", projectService);


    projectService.$incject = ["$http", "baseBackendUrl"];

    function projectService($http, baseBackendUrl) {
        return {
            getProjectsList: getProjectsList,
            getProjectDetails: getProjectDetails
        };


        function getProjectsList () {
            return $http.get(baseBackendUrl + "/projects")
                .then(function (response) {
                    return response.data;
                });
        }

        function getProjectDetails(id) {
            return $http.get(baseBackendUrl + "/projects/" + id)
                .then(function (response) {
                    return response.data;
                });
        }
    }


})();