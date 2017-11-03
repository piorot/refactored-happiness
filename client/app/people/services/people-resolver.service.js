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
                person.roles.forEach(function (role) {
                    if (!resolvedList[role.roleName]) {
                        resolvedList[role.roleName] = [];
                    }
                    resolvedList[role.roleName].push(person);
                })
            })
            return resolvedList;
        }


        function resolveEmployeeRoles(employeeRoles) {
            if (!employeeRoles || !employeeRoles.length) {
                return [];
            }
            var roles = [];
            employeeRoles.forEach(function (role) {
                role.teams.forEach(function (team) {
                    roles.push({team: team, role: role.roleName })
                })
            })
            return roles;
        }
    }
})();