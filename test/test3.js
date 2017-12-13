describe("BowlingGame3", function() {
	var game3;

	
	beforeEach(function(){
		game3 = new BowlingGame();
	});


	it("should handle one spare", function() {
		game3.rollSpare();
		game3.roll(3);
		game3.rollMany(17, 0);
		expect(game3.score()).to.equal(16);
	});

});
