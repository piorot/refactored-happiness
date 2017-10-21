'use strict';

describe('Toolbar Controller', function () {
    var sandbox;
    var $controller;


    beforeEach(module('ui.router'));
    beforeEach(module('toolbar'));
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));


    it("should toggle side navigation when toggleMenu called", function() {
        var sandbox = sinon.sandbox.create();
        var toggleMenu = sandbox.stub();
        var sidenavMock = function () {
            return { toggle: toggleMenu }
        }
        var toolbarController = $controller('ToolbarController', { $mdSidenav: sidenavMock });
        toolbarController.toggleMenu()
        expect(toggleMenu).to.have.been.calledOnce;


    });

});