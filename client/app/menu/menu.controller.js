(function () {
    "use strict";
    angular
        .module("menu")
        .controller("MenuController", MenuController);

    function MenuController($mdSidenav, $mdMedia, $mdComponentRegistry) {
        var vm = this;
        vm.shouldBeLockedOpen = true; 
        // vm.shouldBeLockedOpen = shouldBeLockedOpen()
        activate();
        
        
        //ToDo : ensure md-component-id "menu" and size "gt-xs" are module specific constants

        function activate() {
            console.log('activate of menu controller');

            $mdComponentRegistry.when('menu').then(function () {
                //setInitialMenuState();
            })
        }

        function setInitialMenuState() {
            if ($mdMedia('gt-xs')) {
                console.log("this screen is greater than xs");
                $mdSidenav("menu").open();
            }
        }

        function shouldBeLockedOpen(){
            return true;
        }


    }
})();

