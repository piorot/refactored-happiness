"use strict";

describe("invocation of $http methods", function () {
    var $http;
    var sandbox;
    var baseBackendUrl;
    var projectsService;

    beforeEach(module('app'));
    beforeEach(module('templates'));

    beforeEach(inject(function (_$http_, _projectsService_, _baseBackendUrl_) {
        $http = _$http_
        baseBackendUrl = _baseBackendUrl_;
        projectsService = _projectsService_;
        sandbox = sinon.sandbox.create();
    }));

    afterEach(function () {
        sandbox.restore();
    });


    it("getPtojectList should call get method on $http service", function () {
        var httpGET = sandbox.stub($http, "get").resolves({ data: { someKey: "someValue" } });
        projectsService.getProjectsList();
        expect(httpGET).to.have.been.calledOnce;
        expect(httpGET).to.have.been.calledWith(baseBackendUrl + "/projects");
    });

    it("getPtojectDetails should call get method on $hhtp service", function () {
        var testProjectId = 123;
        var httpGET = sandbox.stub($http, "get").resolves({ data: { someKey: "someValue" } });
        projectsService.getProjectDetails(testProjectId);
        expect(httpGET).to.have.been.calledOnce;
        expect(httpGET).to.have.been.calledWith(baseBackendUrl + "/projects/" + testProjectId);

    })

})

