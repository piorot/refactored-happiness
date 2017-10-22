(function () {
    angular
        .module("people")
        .controller('PeopleController', PeopleController)

    function PeopleController(peopleService) {

        activate();
        
        function activate() {
            return peopleService.getPeopleList()
                .then(function (response) {
                    console.log(response);
                })
        }


    }
})();