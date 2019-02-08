describe("RestaurantRecommender", function() {
  var Data = require('../restaurantRecommender.js');
  var testData;

  beforeEach(function() {
    testData = new Data();
  });

  describe("Data addUser", function() {
    it("adds a user", function() {
      expect(testData.ratings.length).toEqual(0);
      testData.addRating('amy', 'jack in the boxs', 6);
      expect(testData.ratings.length).toEqual(1);
    });
  });
  
  describe("Data addRating", function() {
    it("can save a rating for a restaurant", function() {
      testData.addRating('amy', 'jack in the boxs', 6);
      expect(testData.ratings[0].userName).toEqual('amyq');
      expect(testData.ratings[0].restaurantName).toEqual('jack in the boxs');
      expect(testData.ratings[0].rating).toEqual(6);
    });
    xit("user already have a rating for this restaurant", function() {
      testData.addRating('amy', 'jack in the boxs', 6);
      
    })

  });
});