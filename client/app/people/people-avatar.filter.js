(function () {
    angular.module("people")
        .filter('avatar', avatar)


    function avatar() {
        return function (person) {
            return person.avatar ? "./img/" + person.avatar : "./img/test-avatars/default-avatar.png"
        }
    }
})();