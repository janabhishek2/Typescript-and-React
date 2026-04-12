var dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789,
    },
};
var cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,
    },
};
// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget
var getProfit = function (movie) {
    var _a = movie.boxOffice, _b = _a.budget, budget = _b === void 0 ? 0 : _b, _c = _a.grossWorldwide, grossWorldwide = _c === void 0 ? 0 : _c;
    return grossWorldwide - budget;
};
console.log(getProfit(cats));
// For example...
// getProfit(cats) => -21166652
