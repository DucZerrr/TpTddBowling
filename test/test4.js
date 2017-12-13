describe("BowlingGame", function() {
	var game;

	
	beforeEach(function(){
		game = new BowlingGame();
	});


	it("should handle one strike", function() {
		game.rollStrike();
		game.roll(3);
		game.roll(4);
		game.rollMany(16, 0);
		expect(game.score()).to.equal(24);
	});


});
