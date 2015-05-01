var hex2rgb = require("../lib/hex2rgb");
var should = require("chai").should();

describe("hex2rgb", function() {

	it("should return an error if the value is not a hex code", function(done) {
		hex2rgb("blue", function(error, result) {
			error.should.exist;
			done();
		});
	});

	it("should return a correctly converted rgb value", function(done) {
		var rgb = hex2rgb("#fff", function(error, result) {
			should.not.exist(error);
			result.should.deep.equal([255, 255, 255]);
			done();
		});
	});

	it("should return rgb if passed an rgb value");
});