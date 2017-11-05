(function () {
    "use strict";
    angular.module("app")
        .filter('imageResolver', imageResolver);
        
        imageResolver.$inject = ["imgCatalog"];

    function imageResolver(imgCatalog) {
        return function (obj, imageProperty) {
            if(!obj || !imageProperty)            
                return "";
            if (imageProperty === 'avatar')
                return obj.avatar ? imgCatalog + "/" + obj.avatar : imgCatalog + "/test-avatars/default-avatar.png";
            else if (imageProperty === 'splashScreen')
                return obj.splashScreen ? imgCatalog + "/" + obj.splashScreen : imgCatalog + "/projects/splashes/default-splash.png";
            else if (imageProperty === 'icon')
                return obj.icon ? imgCatalog + "/" + obj.icon :  imgCatalog + "/projects/icons/logo.svg";
            else
                return "";    
        };
    }
})();