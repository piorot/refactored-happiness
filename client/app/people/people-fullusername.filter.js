(function () {
    angular.module("people")
        .filter('fullusername', fullusername)


    function fullusername() {
        return function (person) {
            return `${person.firstname} ${person.lastname}`
        }
    }
})();