(function () {
    angular
        .module("people")
        .controller('PeopleListController', PeopleListController)

        PeopleListController.$inject = ['peopleService', 'peopleListResolverService', '$scope'];

    function PeopleListController(peopleService, peopleListResolverService, $scope) {
        var vm = this;
        vm.list;
        vm.roles;
        vm.resolvedPeopleList
        activate();

        function activate() {
            return peopleService.getPeopleList()
                .then(function (peopleList) {
                    vm.list = peopleList;
                    return peopleListResolverService.resolve(peopleList)
                })
                .then(function (resolvedPeopleList) {
                    vm.resolvedPeopleList = resolvedPeopleList;
                    vm.roles = Object.keys(resolvedPeopleList);

                })
        }


    }
})();