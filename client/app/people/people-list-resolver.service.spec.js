'use strict';

describe('People List Resolver Service', function () {
    var peopleListResolverService;


    beforeEach(module('ui.router'));
    beforeEach(module('people'));
    beforeEach(module('app'));
    beforeEach(inject(function (_peopleListResolverService_, ) {
        peopleListResolverService = _peopleListResolverService_;
    }));

    it("should properly handle one-element list with employee having a role in one team", function () {

        var peopleList = [{ firstname: "Piotr", lastname: "Rotyński", roles: { 'developer': ["Team AbcMix"] } }];
        var resolvedPeopleList = peopleListResolverService.resolve(peopleList);

        expect(resolvedPeopleList).to.have.property("developer");
        expect(resolvedPeopleList.developer).to.be.an('array');
        expect(resolvedPeopleList.developer.length).to.equal(1);

    });

    it("should properly handle one-element list with employee having same role in multiple teams", function () {

        var peopleList = [{ firstname: "Piotr", lastname: "Rotyński", roles: { 'developer': ["Team AbcMix", "Team DzikieBuhaje"] } }];
        var resolvedPeopleList = peopleListResolverService.resolve(peopleList);

        expect(resolvedPeopleList).to.have.property("developer");
        expect(resolvedPeopleList.developer).to.be.an('array');
        expect(resolvedPeopleList.developer.length).to.equal(1);

    })

    it("should properly handle one-element list with employee having multiple roles", function () {

        var peopleList = [{ firstname: "Piotr", lastname: "Rotyński", roles: { 'developer': ["Team AbcMix", "Team DzikieBuhaje"], 'scrum master': ['Team Pelicans'] } }];
        var resolvedPeopleList = peopleListResolverService.resolve(peopleList);

        expect(resolvedPeopleList).to.have.property("developer");
        expect(resolvedPeopleList.developer).to.be.an('array');
        expect(resolvedPeopleList.developer.length).to.equal(1);

        expect(resolvedPeopleList).to.have.property("scrum master");
        expect(resolvedPeopleList["scrum master"]).to.be.an('array');
        expect(resolvedPeopleList["scrum master"].length).to.equal(1);

    })

    it("should properly handle multiple-element list with employees having multiple roles", function () {

        var peopleList = [
            { firstname: "Piotr", lastname: "Rotyński", roles: { 'developer': ["Team AbcMix", "Team DzikieBuhaje"], 'scrum master': ['Team Pelicans'] } },
            { firstname: "Piotr", lastname: "Kowalski", roles: { 'developer': ["Team AbcMix", "Team DzikieBuhaje"], 'delivery lead': ['Team TestTeam'] } },
        ];
        var resolvedPeopleList = peopleListResolverService.resolve(peopleList);

        expect(resolvedPeopleList).to.have.property("developer");
        expect(resolvedPeopleList.developer).to.be.an('array');
        expect(resolvedPeopleList.developer.length).to.equal(2);

        expect(resolvedPeopleList).to.have.property("scrum master");
        expect(resolvedPeopleList["scrum master"]).to.be.an('array');
        expect(resolvedPeopleList["scrum master"].length).to.equal(1);

        expect(resolvedPeopleList).to.have.property("delivery lead");
        expect(resolvedPeopleList["delivery lead"]).to.be.an('array');
        expect(resolvedPeopleList["delivery lead"].length).to.equal(1);

    })




});