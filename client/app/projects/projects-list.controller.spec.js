'use strict';

describe('ProjectsListController', function () {
    var $q;
    var $state;
    var $scope;
    var sandbox;
    var $rootScope;
    var $controller;
    var projectsService;
    var baseBackendUrl;
    var peopleListResolverService;



    beforeEach(module('ui.router'));
    beforeEach(module('people'));
    beforeEach(module('app'));
    beforeEach(module('templates'));
    beforeEach(inject(function (_$controller_, _projectsService_, _baseBackendUrl_, _peopleListResolverService_, _$rootScope_, _$q_, _$state_) {
        $q = _$q_;
        $state = _$state_;
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        baseBackendUrl = _baseBackendUrl_;
        projectsService = _projectsService_;
        peopleListResolverService = _peopleListResolverService_;
    }));

    it("on load should download projectsList", function () {
        sandbox = sinon.sandbox.create();
        var getProjectsList = sandbox.stub(projectsService, "getProjectsList").resolves({ data: [] });

        var ProjectsListController= $controller("ProjectsListController", { projectsService: projectsService, baseBackendUrl: baseBackendUrl, $scope: $scope });

        expect(getProjectsList).to.have.been.calledOnce;
        expect(getProjectsList).to.have.been.calledWith();
    })

    it("should change state to projectsDetails when called showProjectDetails", function() {
        var ProjectsListController = $controller('ProjectsListController', { $state: $state });
        var dummyProjectMock = {id : 123};
        var sandbox = sinon.sandbox.create();
        var stateGo = sandbox.stub($state, "go");
        
        ProjectsListController.showProjectDetails(dummyProjectMock);
        expect(stateGo).to.have.been.calledOnce;
        expect(stateGo).to.have.been.calledWith('projectsDetails', {id : dummyProjectMock.id});

    })

   
});