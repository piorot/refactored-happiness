'use strict';

describe('PeopleListController', function () {
    var $q;
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
    beforeEach(module('templates'));
    beforeEach(inject(function (_$controller_, _peopleService_, _baseBackendUrl_, _peopleListResolverService_, _$rootScope_, _$q_) {
        $controller = _$controller_;
        peopleService = _peopleService_;
        baseBackendUrl = _baseBackendUrl_;
        peopleListResolverService = _peopleListResolverService_;
        $scope = _$rootScope_.$new();
        $rootScope = _$rootScope_;
        $q = _$q_;
    }));

    it("on load should download peopleList", function () {
        sandbox = sinon.sandbox.create();
        var getPeopleList = sandbox.stub(peopleService, "getPeopleList").resolves({ data: [] });

        var PeopleListController= $controller("PeopleListController", { peopleService: peopleService, baseBackendUrl: baseBackendUrl, $scope: $scope });

        expect(getPeopleList).to.have.been.calledOnce;
        expect(getPeopleList).to.have.been.calledWith();


    })

    it("on load should resolve peopleList ", function () {
        sandbox = sinon.sandbox.create();
        var getPeopleList = sandbox.stub(peopleService, "getPeopleList").returns($q.when());
        var resolvePeopleList = sandbox.stub(peopleListResolverService, "resolve").returns({ "manager": [] });

        var PeopleListController = $controller("PeopleListController", { peopleService: peopleService, baseBackendUrl: baseBackendUrl, peopleListResolverService: peopleListResolverService, $scope: $scope, $rootScope: $rootScope });
        $scope.$apply();
        expect(resolvePeopleList).to.have.been.called;





    })
});