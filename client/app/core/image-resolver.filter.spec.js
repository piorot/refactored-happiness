'use strict';

describe('Image Resolver Filter', function () {
    var sandbox;
    var imageResolverFilter;
    var imgCatalog;


    beforeEach(module('ui.router'));
    beforeEach(module('app'));
    beforeEach(inject(function (_imageResolverFilter_, _imgCatalog_) {
        imageResolverFilter = _imageResolverFilter_;
        imgCatalog = _imgCatalog_;
    }));

    describe("should return empty string as path when not invoked properly", function () {
        it("should return empty string when object is undefined", function () {
            var result = imageResolverFilter(undefined, 'avatar')
            expect(result).to.equal("");

        });
        it("should return empty string when imagePropery is empty string", function () {
            var result = imageResolverFilter({ avatar: 'img/test.jpg' }, '')
            expect(result).to.equal("");

        })
        it("should return empty string when imagePropery is empty string", function () {
            var result = imageResolverFilter({ avatar: 'img/test.jpg' }, null)
            expect(result).to.equal("");

        })
        it("should return empty string when imagePropery is empty string", function () {
            var result = imageResolverFilter({ avatar: 'img/test.jpg' }, undefined)
            expect(result).to.equal("");

        })
        it("should return empty string when imagePropery is unrecognized", function () {
            var result = imageResolverFilter({ avatar: 'img/test.jpg' }, 'image')
            expect(result).to.equal("");

        })

    })


    describe("should return properly build path when properly invoked", function () {
        var testObject = {
            id: 123
            , avatar: "avatar"
            , otherProperty: "some string"
            , splashScreen: "splashes/test-splash.jpg"
            , icon: "icons/test-icon.jpg"
        };

        var emptyTestObject = {
            id: 123
            , otherProperty: "some string"
        };

        describe("user avatar", function () {
            it("should return properly built user avatar path", function () {
                var result = imageResolverFilter(testObject, 'avatar')
                expect(result).to.equal(imgCatalog + "/" + testObject.avatar);
            });
            it("should return properly built default user avatar path", function () {
                var result = imageResolverFilter(emptyTestObject, 'avatar')
                expect(result).to.equal(imgCatalog + "/test-avatars/default-avatar.png");
            });
        })
        describe("splash screen", function () {
            it("should return properly built splash screen path", function () {
                var result = imageResolverFilter(testObject, 'splashScreen')
                expect(result).to.equal(imgCatalog + "/" + testObject.splashScreen);
            });
            it("should return properly built default project splash screen", function () {
                var result = imageResolverFilter(emptyTestObject, 'splashScreen')
                expect(result).to.equal(imgCatalog + "/projects/splashes/default-splash.png");
            });
        })
        describe("company icon", function () {
            it("should return properly built company icon path", function () {
                var result = imageResolverFilter(testObject, 'icon')
                expect(result).to.equal(imgCatalog + "/" + testObject.icon);
            });
            it("should return properly built defaultcompany icon path", function () {
                var result = imageResolverFilter(emptyTestObject, 'icon')
                expect(result).to.equal(imgCatalog + "/projects/icons/logo.svg");
            });
        })


    })

});