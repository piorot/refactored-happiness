(function () {
    angular
        .module("people")
        .controller('PeopleController', PeopleController)

    PeopleController.$inject = ['peopleService', 'peopleListResolverService', '$scope'];

    function PeopleController(peopleService, peopleListResolverService, $scope) {
        var vm = this;
        vm.list;
        activate();

        function activate() {
            return peopleService.getPeopleList()
                .then(function (peopleList) {
                    vm.list = peopleList;
                    return peopleListResolverService.resolve(peopleList)
                })
                .then(function (resolvedPeopleList) {
                })
        }


    }
})();