(function () {
    angular.module("people")
        .filter('fullusername', fullusername)


    function fullusername() {

        return function (person) {
            if (!person || !person.firstname || !person.lastname) {
                return '';
            }
            return `${person.firstname} ${person.lastname}`
        }
    }
})();