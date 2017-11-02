(function () {
    angular.module("app")
        .filter('imageResolver', imageResolver)


    function imageResolver() {
        return function (object, imageProperty) {
            if (imageProperty === 'avatar')
                return object.avatar ? "./img/" + object.avatar : "./img/test-avatars/default-avatar.png"
            else if (imageProperty === 'splashScreen')
                return object.splashScreen ? "./img/" + object.splashScreen : "./img/projects/splashes/default-splash.png"
            else if (imageProperty === 'icon')
                return object.icon ? "./img/" + object.icon : "./img/projects/icons/logo.svg"
        }
    }
})();