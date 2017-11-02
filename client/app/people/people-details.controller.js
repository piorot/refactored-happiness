(function () {
    angular
        .module("people")
        .controller('PeopleDetailsController', PeopleDetailsController)

    PeopleDetailsController.$inject = ['peopleService', 'peopleListResolverService', '$scope', '$stateParams'];

    function PeopleDetailsController(peopleService, peopleListResolverService, $scope, $stateParams) {
        var vm = this;
        activate();

        function activate() {

            peopleService.getEmployeeDetails($stateParams.id)
                .then(function (personDetails) {
                    vm.person = personDetails;
                    var roles = [];
                    
                    Object.keys(personDetails.roles).forEach(function(role){
                        personDetails.roles[role].forEach(function(team){
                            roles.push({team : team, role : role})
                        })
                    })
                    delete vm.person.roles;
                    vm.person.roles = roles;
                    
                    
                })
        }


    }
})();