describe("BowlingGame1", function() {
	var game1;

	
	beforeEach(function(){
		game1 = new BowlingGame1();
	});

	it("should handle gutter game1", function() {
		game1.rollMany(20, 0);
		expect(game1.score()).to.equal(0);
	});
});
