(function () {
    "use strict";
    angular
        .module("toolbar")
        .controller("ToolbarController", ToolbarController);

    ToolbarController.$inject = ['$mdSidenav'];

    function ToolbarController($mdSidenav) {
        var vm = this;
        vm.toggleMenu = toggleMenu;

       

        function toggleMenu() {
            $mdSidenav("menu").toggle();
        }
    }

})();