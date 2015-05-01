var getPalette = require("../lib/getPalette");
var should = require("chai").should();

describe("getPalette", function() {

	it("should throw an error if the result is not an array", function(done) {

		var notArray = function() {
			getPalette(process.cwd() + "/test/fixtures/config-palette-non-array.json");
		};
		should.throw(notArray, /is not an array/);
		done();
	});

	it("should return an array with 3 items by default", function() {
		var palette = getPalette();
		palette.should.be.an("array").with.length(3);
	});
});