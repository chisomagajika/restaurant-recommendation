// const Data = require('./Data');
class RestaurantRecommender{
  //use the values in constructor to create properties that are equal to arguments
  constructor (inquirer,allRestaurants, searchFilter,rating){
    this.inquirer = inquirer;
    this.allRestaurants= allRestaurants;
    this.searchFilter = searchFilter;
    this.rating = rating;
  }
//build a function to return the suggested restaurants (the output/objective)
  suggestedRestaurants(){
    // Prune the list of restaurants with the searchFilter  that was passed into the constructor.

    return this.searchFilter.prune(this.allRestaurants)
     
  }
}
class Filter{
  constructor(minimumStarRating, desiredCuisines,unfilteredRestaurants){
    this.minimumStarRating = minimumStarRating;
    this.desiredCuisines= desiredCuisines;
    this.unfilteredRestaurants= unfilteredRestaurants;
  }
 
  prune(restaurants){
    //  Loops through the unfilteredRestaurants and filters down to only the ones that our conditional method returns true for.

    return restaurants.filter((restaurant) => {
    return this.conditional(restaurant)
    })
  }
  // Compares a restaurant to the minimumStarRating and desiredCuisnes
  conditional(restaurant) {
    return restaurant.averageRating >= this.minimumStarRating && this.desiredCuisines.includes(restaurant.cuisine)
  }

}
  class Restaurant{
    constructor(name,cuisine,averageRating){
      this.name = name;
      this.cuisine = cuisine;
      this.averageRating = null;
      // no function needed because it's value holder; plain oject/class/no work
    }
  }
class User{
  constructor(name, email){
    this.name = name;
  }
  
}
class Rating{
  constructor(userName,restaurantName, rating){
    this.userName = userName;
    this.restaurantName = restaurantName;
    this.rating = rating;

  }
  
}
class Data{
    constructor(){
      this.users = [];
      this.ratings = [];
      this.catagories = [];
      this.restaurantNames= [];
    }
   addUser(newUser) {
      // Adds a new User to the System
      this.users.push(newUser);
    }
    addCategory(newCat) {
      // Adds a new Category to the System
      this.categories.push(newCat);
    }
    addRating(user, restaurant, stars) {
      // Adds a user rating for a restaurant
      this.ratings.push(new Rating(user, restaurant, stars));
    }
  
  }

const data = new Data();


data.ratings.push(
new Rating('amy', 'jack in the boxs', 6),
new Rating('amy', 'subway', 4),
new Rating('amy', 'burgger', 9),
new Rating( 'steve','Chuckey Cheeses', 7 )
);
const chuckeys = new Restaurant('Chuckey Cheeses', 'pizza', 4);
// the varible chuckey is the a new restaurant meaning that if we want to look it up we should remeber to link it up to what the rating.restaurantName, by what value they shar so we can link them later.
console.log(data.ratings.filter((rating)=>{
  return rating.restaurantName === chuckeys.name;
}));
function findRating(ratings, restaurant){
  return ratings.filter((rating)=>{
    return rating.restaurantName === restaurant.name;
  });
}
console.log(findRating(data.ratings, chuckeys));

// Create two restaurants so we can test the filter

const fallao = new Restaurant('fallao', 'ethiopian', 10)
const restaurants = [chuckeys, fallao];

// Create a filter that prunes the list down to ethiopian restaurants that have a greater than 4 average rating,
const filter = new Filter(4, ['ethiopian']);

// Compose a recommender from the above restaurants and filter variables.
const recommender = new RestaurantRecommender("Zee", restaurants, filter);

// Log the results of the suggested Restaurants
// console.log(recommender.suggestedRestaurants());
// $(document).ready(function(){
//     $("button").click(function(){
//       $("h1").hide();
//     });
//   });

module.exports = Data;