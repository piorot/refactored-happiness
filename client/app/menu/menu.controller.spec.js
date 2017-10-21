'use strict';

describe('jakis opis', function () {
var sandbox;

    beforeEach(module('ui.router'));
    beforeEach(module('menu'));


    describe('menu controller', function () {

        it('should have changeState method defined', inject(function ($controller) {

            var menuController = $controller('MenuController');
            expect(menuController.changeState).not.to.be.undefined;


        }));

        it("should change state when called", inject(function ($controller, $state) {
            var menuController = $controller('MenuController', {$state : $state});
            var sandbox = sinon.sandbox.create();
            var stateGo = sandbox.stub($state, "go");
            menuController.changeState('testTargetState')
            
            expect(stateGo).to.have.been.calledOnce;


        }))

    });
});