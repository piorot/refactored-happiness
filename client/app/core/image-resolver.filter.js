(function () {
    angular.module("app")
        .filter('imageResolver', imageResolver)


    function imageResolver() {
        return function (obj, imageProperty) {
            if(!obj || ! imageProperty)            
                return ""
            if (imageProperty === 'avatar')
                return obj.avatar ? "./img/" + obj.avatar : "./img/test-avatars/default-avatar.png"
            else if (imageProperty === 'splashScreen')
                return obj.splashScreen ? "./img/" + obj.splashScreen : "./img/projects/splashes/default-splash.png"
            else if (imageProperty === 'icon')
                return obj.icon ? "./img/" + obj.icon : "./img/projects/icons/logo.svg"
        }
    }
})();