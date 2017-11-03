(function () {
    "use strict";

    angular.module("people")
        .factory("peopleResolverService", peopleResolverService)

    peopleResolverService.$inject = [];

    function peopleResolverService() {
        return {
            resolveList: resolveList,
            resolveEmployeeRoles: resolveEmployeeRoles
        }

        function resolveList(list) {

            var resolvedList = {};
            list.forEach(function (person) {
                Object.keys(person.roles).forEach(function (roleName) {
                    if (!resolvedList[roleName]) {
                        resolvedList[roleName] = [];
                    }
                    resolvedList[roleName].push(person);
                })
            })
            return resolvedList;
        }


        function resolveEmployeeRoles(emplayeeRoles) {
            if (!emplayeeRoles || !emplayeeRoles.length) {
                return [];
            }
            var roles = [];
            emplayeeRoles.forEach(function (role) {
                role.teams.forEach(function (team) {
                    roles.push({team: team, role: role.roleName })
                })
            })
            console.log(roles);
            return roles;
        }
    }
})();