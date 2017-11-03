'use strict';

describe('People Resolver Service', function () {
    var peopleResolverService;


    beforeEach(module('ui.router'));
    beforeEach(module('people'));
    beforeEach(module('app'));
    beforeEach(module('templates'));
    beforeEach(inject(function (_peopleResolverService_, ) {
        peopleResolverService = _peopleResolverService_;
    }));
    describe("resolveList", function () {
        it("should properly handle one-element list with employee having a role in one team", function () {

            var peopleList = [{ firstname: "Piotr", lastname: "Rotyński", roles: { 'developer': ["Team AbcMix"] } }];
            var resolvedPeopleList = peopleResolverService.resolveList(peopleList);

            expect(resolvedPeopleList).to.have.property("developer");
            expect(resolvedPeopleList.developer).to.be.an('array');
            expect(resolvedPeopleList.developer.length).to.equal(1);

        });

        it("should properly handle one-element list with employee having same role in multiple teams", function () {

            var peopleList = [{ firstname: "Piotr", lastname: "Rotyński", roles: { 'developer': ["Team AbcMix", "Team DzikieBuhaje"] } }];
            var resolvedPeopleList = peopleResolverService.resolveList(peopleList);

            expect(resolvedPeopleList).to.have.property("developer");
            expect(resolvedPeopleList.developer).to.be.an('array');
            expect(resolvedPeopleList.developer.length).to.equal(1);

        })

        it("should properly handle one-element list with employee having multiple roles", function () {

            var peopleList = [{ firstname: "Piotr", lastname: "Rotyński", roles: { 'developer': ["Team AbcMix", "Team DzikieBuhaje"], 'scrum master': ['Team Pelicans'] } }];
            var resolvedPeopleList = peopleResolverService.resolveList(peopleList);

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
            var resolvedPeopleList = peopleResolverService.resolveList(peopleList);

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

    })




});