(function () {
    "use strict";
    angular
        .module("menu")
        .controller("MenuController", MenuController);

        function MenuController($state) {
        var vm = this;
        vm.changeState = changeState;
              
        function changeState(targetState){
            $state.go(targetState)
        }       

    }
})();

