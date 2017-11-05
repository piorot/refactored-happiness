/*jshint expr: true*/
"use strict";

describe("peopleService invocation of $http methods", function () {
    var $http;
    var sandbox;
    var baseBackendUrl;
    var peopleService;

    beforeEach(module('app'));
    beforeEach(module('templates'));

    beforeEach(inject(function (_$http_, _peopleService_, _baseBackendUrl_) {
        $http = _$http_;
        baseBackendUrl = _baseBackendUrl_;
        peopleService = _peopleService_;
        sandbox = sinon.sandbox.create();
    }));

    afterEach(function () {
        sandbox.restore();
    });


    it("getPeopleList should call get method on $http service", function () {
        var httpGET = sandbox.stub($http, "get").resolves();
        peopleService.getPeopleList();
        expect(httpGET).to.have.been.calledOnce;
        expect(httpGET).to.have.been.calledWith(baseBackendUrl + "/people");
    });

    it("getEmployeeDetails should call get method on $hhtp service", function () {
        var testEmployeeId = 123;
        var httpGET = sandbox.stub($http, "get").resolves({ data: { someKey: "someValue" } });
        peopleService.getEmployeeDetails(testEmployeeId);
        expect(httpGET).to.have.been.calledOnce;
        expect(httpGET).to.have.been.calledWith(baseBackendUrl + "/people/" + testEmployeeId);

    });
});

