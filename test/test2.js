describe("BowlingGame", function() {
	var game;

	
	beforeEach(function(){
		game = new BowlingGame();
	});

	it("should handle all ones", function() {
		game.rollMany(20, 1);
		expect(game.score()).to.equal(20);
	});


});
