// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var getTotal = function (products) {
    return products.reduce(function (acc, curr) {
        return acc + (curr === null || curr === void 0 ? void 0 : curr.price);
    }, 0);
};
var products = [{
        name: "Dahi",
        price: 200
    }, {
        name: "Soya",
        price: 300
    }];
var ans = getTotal(products);
console.log(ans);
