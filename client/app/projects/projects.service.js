(function () {
    "use strict";
    angular.module("people")
    .factory("projectsService", projectService);


    projectService.$incject = ["$http", "baseBackendUrl"];

    function projectService($http, baseBackendUrl){
        return {
            getProjectsList : getProjectsList
        }

        function getProjectsList(){
            return $http.get(baseBackendUrl + "/projects")
            .then(function (response) {
                return response.data;
            })
        }
    }


})();