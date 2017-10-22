'use strict';

describe('People Controller', function () {
    var $scope;
    var sandbox;
    var $rootScope;
    var $controller;
    var peopleService;
    var baseBackendUrl;
    var peopleListResolverService;



    beforeEach(module('ui.router'));
    beforeEach(module('people'));
    beforeEach(module('app'));
    beforeEach(inject(function (_$controller_, _peopleService_, _baseBackendUrl_, _peopleListResolverService_, _$rootScope_) {
        $controller = _$controller_;
        peopleService = _peopleService_;
        baseBackendUrl = _baseBackendUrl_;
        peopleListResolverService = _peopleListResolverService_;
        $scope = _$rootScope_.$new();
        $rootScope = _$rootScope_;
    }));

    it("on load should download peopleList", function () {
        sandbox = sinon.sandbox.create();
        var getPeopleList = sandbox.stub(peopleService, "getPeopleList").resolves({ data: [] });

        var PeopleController = $controller('PeopleController', { peopleService: peopleService, baseBackendUrl: baseBackendUrl, $scope: $scope });

        expect(getPeopleList).to.have.been.calledOnce;
        expect(getPeopleList).to.have.been.calledWith();


    })

    it("on load should resolve peopleList ", function () {
        sandbox = sinon.sandbox.create();
        var getPeopleList = sandbox.stub(peopleService, "getPeopleList").resolves();
        var resolvePeopleList = sandbox.stub(peopleListResolverService, "resolve").returns({ "manager": [] });

        var PeopleController = $controller('PeopleController', { peopleService: peopleService, baseBackendUrl: baseBackendUrl, peopleListResolverService: peopleListResolverService, $scope: $scope, $rootScope: $rootScope });

        PeopleController.activate()
            .then(function () {
                expect(resolvePeopleList).to.have.been.called
            })





    })
});