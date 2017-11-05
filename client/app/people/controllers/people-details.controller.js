(function () {
    "use strict";
    angular
        .module("people")
        .controller('PeopleDetailsController', PeopleDetailsController);

    PeopleDetailsController.$inject = ['peopleService', 'peopleResolverService', '$scope', '$stateParams'];

    function PeopleDetailsController(peopleService, peopleResolverService, $scope, $stateParams) {
        var vm = this;
        vm.readonly = true;
        activate();

        function activate() {

            peopleService.getEmployeeDetails($stateParams.id)
                .then(function (personDetails) {
                    vm.person = personDetails;
                    vm.person.roles = peopleResolverService.resolveEmployeeRoles(personDetails.roles);
                });
        }


    }
})();