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

    describe("resolveEmployeesRoles", function () {
        it("should return empty array if no roles defined", function () {
            expect(peopleResolverService.resolveEmployeeRoles(undefined)).to.be.an('array');
            expect(peopleResolverService.resolveEmployeeRoles(undefined)).to.have.length(0);
        })
        it("should resolve to 2 roles when user is developer in two teams", function () {
            var rolesToResolve = [
                {
                    "roleName": "Developer",
                    "teams": [
                        "Team California",
                        "Team Alabama"
                    ]
                }
            ]

            var expectedResolvedRoles = [{ team: "Team California", role: "Developer" }, { team: "Team Alabama", role: "Developer" }];

            var resolvedRoles = peopleResolverService.resolveEmployeeRoles(rolesToResolve);
            expect(resolvedRoles).to.be.an('array');
            expect(resolvedRoles).to.have.length(2);
            expect(resolvedRoles).to.deep.equal(expectedResolvedRoles);
        })
        it("should resolve to 3 roles when user is developer in two teams and a manager in yet another one", function () {
            var rolesToResolve = [
                {
                    "roleName": "Developer",
                    "teams": [
                        "Team California",
                        "Team Alabama"
                    ]
                },
                {
                    "roleName": "Manager",
                    "teams": [
                        "Dev Wolves"
                    ]
                }
            ];

            var expectedResolvedRoles = [
                { team: "Team California", role: "Developer" }
                , { team: "Team Alabama", role: "Developer" }
                , { team: "Dev Wolves", role: "Manager" }];

            var resolvedRoles = peopleResolverService.resolveEmployeeRoles(rolesToResolve);
            expect(resolvedRoles).to.be.an('array');
            expect(resolvedRoles).to.have.length(3);
            expect(resolvedRoles).to.deep.equal(expectedResolvedRoles);
        })



    })



});