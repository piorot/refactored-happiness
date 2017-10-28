(function () {
    "use strict";
    angular.module("people")
        .factory("peopleService",peopleService);
        
        peopleService.$inject = ['$http', 'baseBackendUrl', '$location'];

        function peopleService($http, baseBackendUrl, $location) {
            var baseUrl = 'http://' + $location.$$host + ':' + $location.$$port 
            return {
                getPeopleList: function getPeopleList() {
                    return $http.get(baseUrl + "/people")
                        .then(function (response) {
                            return response.data;
                        })
                       
                },

                getEmployeeDetails : function getEmployeeDetails(id){
                    return $http.get(baseUrl + "/people/" +id)
                    .then(function (response) {
                        return response.data;
                    })
                }
            }

        }
})();