describe("BowlingGame2", function() {
	var game2;

	
	beforeEach(function(){
		game2 = new BowlingGame();
	});

	it("should handle all ones", function() {
		game2.rollMany(20, 1);
		expect(game2.score()).to.equal(20);
	});


});
