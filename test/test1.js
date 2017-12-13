describe("BowlingGame", function() {
	var game;

	
	beforeEach(function(){
		game = new BowlingGame();
	});

	it("should handle gutter game", function() {
		rollMany(20, 0);
		expect(game.score()).to.equal(0);
	});
});
