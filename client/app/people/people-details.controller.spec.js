'use strict';

describe('PeopleDetailsController', function () {
    var $q;
    var $scope;
    var sandbox;
    var $rootScope;
    var $controller;
    var peopleService;
    var peopleResolverService;
    
    beforeEach(module('ui.router'));
    beforeEach(module('people'));
    beforeEach(module('app'));
    beforeEach(module('templates'));
    beforeEach(inject(function (_$controller_, _peopleService_, _peopleResolverService_, _$rootScope_, _$q_) {
        $controller = _$controller_;
        peopleService = _peopleService_;
        peopleResolverService = _peopleResolverService_;
        $scope = _$rootScope_.$new();
        $rootScope = _$rootScope_;
        $q = _$q_;
    }));

    it("on load should download employee details", function () {
        sandbox = sinon.sandbox.create();
        var getEmployeeDetails = sandbox.stub(peopleService, "getEmployeeDetails").resolves({ data: {} });
        var $fakeStateParams = {id : 1};
        var PeopleDetailsController = $controller("PeopleDetailsController", { peopleService: peopleService, $scope: $scope, $stateParams: $fakeStateParams });

        expect(getEmployeeDetails).to.have.been.calledOnce;
        expect(getEmployeeDetails).to.have.been.calledWith($fakeStateParams.id);


    })

    it("on load should resolve employee roles ", function () {
        sandbox = sinon.sandbox.create();
        var employeeDetails = { id : 1, roles : [{roleName : "Office Assistant", teams : ["Team 1"]}]};
        var getEmployeeDetails = sandbox.stub(peopleService, "getEmployeeDetails").returns($q.when(employeeDetails));
        var $fakeStateParams = {id : 1};
        var PeopleDetailsController = $controller("PeopleDetailsController", { peopleService: peopleService, $scope: $scope, $stateParams: $fakeStateParams });
        
        var resolveEmployeeRoles = sandbox.stub(peopleResolverService, "resolveEmployeeRoles").returns();

        $scope.$apply();
        expect(resolveEmployeeRoles).to.have.been.called;





    })
});
