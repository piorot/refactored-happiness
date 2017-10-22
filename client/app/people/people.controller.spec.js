'use strict';

describe('People Controller', function () {
    var sandbox;
    var $controller;
    var peopleService;
    var baseBackendUrl;


    beforeEach(module('ui.router'));
    beforeEach(module('people'));
    beforeEach(module('app'));
    beforeEach(inject(function (_$controller_, _peopleService_, _baseBackendUrl_) {
        $controller = _$controller_;
        peopleService = _peopleService_;
        baseBackendUrl = _baseBackendUrl_
    }));

    it("on load should download peopleList", function() {
        sandbox = sinon.sandbox.create();
        var getPeopleList = sandbox.stub(peopleService, "getPeopleList").resolves({data : []});

        var menuController = $controller('PeopleController', {peopleService : peopleService, baseBackendUrl : baseBackendUrl });

        expect(getPeopleList).to.have.been.calledOnce;
        expect(getPeopleList).to.have.been.calledWith();


    })
});