(function () {
    angular
        .module("people")
        .controller('PeopleDetailsController', PeopleDetailsController)

    PeopleDetailsController.$inject = ['peopleService', 'peopleListResolverService', '$scope', '$stateParams'];

    function PeopleDetailsController(peopleService, peopleListResolverService, $scope, $stateParams) {
        var vm = this;
        activate();

        function activate() {

            console.log($stateParams);
          
        }


    }
})();