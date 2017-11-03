'use strict';

describe('fullusername Filter', function () {
    var sandbox;
    var fullusernameFilter;

    beforeEach(module('ui.router'));
    beforeEach(module('app'));
    beforeEach(inject(function (_fullusernameFilter_) {
        fullusernameFilter = _fullusernameFilter_;
    }));

    describe("should return empty string if is not invoked properly", function () {
        it("should return empty string when person is undefined", function () {
            var result = fullusernameFilter(undefined)
            expect(result).to.equal("");

        });
        it("should return empty string when lastname is not defined", function () {
            var result = fullusernameFilter({firstname : "Piotr"})
            expect(result).to.equal("");

        })
        it("should return empty string when firstname is not defined", function () {
            var result = fullusernameFilter({lastname : "Rotyński"})
            expect(result).to.equal("");

        })
        

    })


    describe("should return properly build full username when properly invoked", function () {
        var testObject = {
            id: 123
            , avatar: "avatar"
            , firstname: "Piotr"
            , lastname: "Rotyński"
        };

        it("should return empty string when firstname is not defined", function () {
            var result = fullusernameFilter(testObject)
            expect(result).to.equal("Piotr Rotyński");

        })


    })

});