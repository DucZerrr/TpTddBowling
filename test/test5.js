describe("BowlingGame5", function() {
	var game5;

	
	beforeEach(function(){
		game5 = new BowlingGame5();
	});



	it("should handle a perfect game5", function() {
		game5.rollMany(12, 10);
		expect(game5.score()).to.equal(300);
	});
});
