(function () {
    angular
        .module("toolbar")
        .controller("ToolbarController", ToolbarController);

    function ToolbarController($scope, $timeout, $mdSidenav) {
        var vm = this;
        vm.toggleMenu = toggleMenu;

        activate();

        function toggleMenu() {
            $mdSidenav("menu").toggle();
        }

        function activate() {

        }
    }

})();