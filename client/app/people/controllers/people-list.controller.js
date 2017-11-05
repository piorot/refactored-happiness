(function () {
    "use strict";
    angular
        .module("people")
        .controller('PeopleListController', PeopleListController);

        PeopleListController.$inject = ['peopleService', 'peopleResolverService', '$scope', '$state'];

    function PeopleListController(peopleService, peopleResolverService, $scope, $state) {
        var vm = this;
        vm.list;
        vm.roles;
        vm.resolvedPeopleList;
        vm.goToPerson = goToPerson;
        activate();

        function activate() {
            
            
            return peopleService.getPeopleList()
                .then(function (peopleList) {
                    vm.list = peopleList;
                    return peopleResolverService.resolveList(peopleList);
                })
                .then(function (resolvedPeopleList) {
                    vm.resolvedPeopleList = resolvedPeopleList;
                    vm.roles = Object.keys(resolvedPeopleList);
                });
        }

        function goToPerson(person){
            $state.go("peopleDetails", {id : person.id});
        }
    }
})();