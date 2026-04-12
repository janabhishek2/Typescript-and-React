var twoFer = function (name) {
    if (name === void 0) { name = "you"; }
    return "One for ".concat(name, ", one for me");
};
var ans1 = twoFer();
var ans2 = twoFer("Ram");
var isLeapYear = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};
var getFullName = function (name) {
    return "FirstName: ".concat(name === null || name === void 0 ? void 0 : name.first, ", LastName: ").concat(name === null || name === void 0 ? void 0 : name.last);
};
var ans = getFullName({ first: "Abhishek", last: "Jan" });
console.log(ans);
