(function(){
    "use strict";

    angular.module("people")
    .factory("peopleListResolverService", peopleListResolverService)

    peopleListResolverService.$inject = [];

    function peopleListResolverService(){
        return {
            resolve : resolve
        }

        function resolve(list){
            
            var resolvedList = {};
            list.forEach(function(person){
                Object.keys(person.roles).forEach(function(roleName){
                    if(!resolvedList[roleName]) {
                        resolvedList[roleName] = [];
                    }
                    resolvedList[roleName].push(person);
                })
            })
            return resolvedList;
        }
    }
})();