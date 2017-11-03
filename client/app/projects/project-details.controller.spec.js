'use strict';

describe('ProjectDetailsController', function () {
    var $q;
    var sandbox;
    var $controller;
    var projectsService;
    
    beforeEach(module('ui.router'));
    beforeEach(module('people'));
    beforeEach(module('app'));
    beforeEach(module('templates'));
    beforeEach(inject(function (_$controller_, _projectsService_) {
        $controller = _$controller_;
        projectsService = _projectsService_;
    }));

    it("on load should download projectDetails details", function () {
        sandbox = sinon.sandbox.create();
        var getProjectDetails = sandbox.stub(projectsService, "getProjectDetails").resolves({ data: {} });
        var $fakeStateParams = {id : 1};
        var ProjectDetailsController = $controller("ProjectDetailsController", { projectsService: projectsService, $stateParams: $fakeStateParams });

        expect(getProjectDetails).to.have.been.calledOnce;
        expect(getProjectDetails).to.have.been.calledWith($fakeStateParams.id);


    })

    
});
