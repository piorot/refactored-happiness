/*jshint expr: true*/
'use strict';

describe('Menu Controller', function () {
    var sandbox;

    var $controller;
    var $state;

    beforeEach(module('ui.router'));
    beforeEach(module('menu'));
    beforeEach(module('templates'));
    beforeEach(inject(function (_$controller_, _$state_) {
        $state = _$state_;
        $controller = _$controller_;
    }));

    it("should change state when called", function() {
        var menuController = $controller('MenuController', { $state: $state });
        var sandbox = sinon.sandbox.create();
        var stateGo = sandbox.stub($state, "go");
        menuController.changeState('testTargetState');

        expect(stateGo).to.have.been.calledOnce;

    });
});