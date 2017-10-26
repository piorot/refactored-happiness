(function () {
    "use strict";
    angular.module("people")
        .factory("peopleService",peopleService);
        
        peopleService.$inject = ['$http', 'baseBackendUrl'];

        function peopleService($http, baseBackendUrl) {
            return {
                getPeopleList: function getPeopleList() {
                    return $http.get(baseBackendUrl + "/people")
                        .then(function (response) {
                            return response.data;
                        })
                       
                },

                getEmployeeDetails : function getEmployeeDetails(id){
                    return $http.get(baseBackendUrl + "/people/" +id)
                    .then(function (response) {
                        return response.data;
                    })
                }
            }

        }
})();