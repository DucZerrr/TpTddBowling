describe("BowlingGame", function() {
	var game;

	
	beforeEach(function(){
		game = new BowlingGame();
	});



	it("should handle a perfect game", function() {
		game.rollMany(12, 10);
		expect(game.score()).to.equal(300);
	});
});
