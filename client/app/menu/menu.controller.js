(function () {
    "use strict";
    angular
        .module("menu")
        .controller("MenuController", MenuController);

        MenuController.$inject = ['$state'];

        function MenuController($state) {
        var vm = this;
        vm.changeState = changeState;
              
        function changeState(targetState){
            $state.go(targetState);
        }       

    }
})();

