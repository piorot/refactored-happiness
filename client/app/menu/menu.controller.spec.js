'use strict';

describe('Menu Controller', function () {
    var sandbox;

    beforeEach(module('ui.router'));
    beforeEach(module('menu'));

    it("should change state when called", inject(function ($controller, $state) {
        var menuController = $controller('MenuController', { $state: $state });
        var sandbox = sinon.sandbox.create();
        var stateGo = sandbox.stub($state, "go");
        menuController.changeState('testTargetState')

        expect(stateGo).to.have.been.calledOnce;

    }))
});