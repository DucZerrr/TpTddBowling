describe("BowlingGame4", function() {
	var game4;

	
	beforeEach(function(){
		game4 = new BowlingGame();
	});


	it("should handle one strike", function() {
		game4.rollStrike();
		game4.roll(3);
		game4.roll(4);
		game4.rollMany(16, 0);
		expect(game4.score()).to.equal(24);
	});


});
