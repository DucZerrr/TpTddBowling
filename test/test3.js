describe("BowlingGame", function() {
	var game;

	
	beforeEach(function(){
		game = new BowlingGame();
	});


	it("should handle one spare", function() {
		game.rollSpare();
		game.roll(3);
		game.rollMany(17, 0);
		expect(game.score()).to.equal(16);
	});

});
