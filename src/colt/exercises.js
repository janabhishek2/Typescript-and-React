var twoFer = function (name) {
    if (name === void 0) { name = "you"; }
    return "One for ".concat(name, ", one for me");
};
var ans1 = twoFer();
var ans2 = twoFer("Ram");
console.log(ans1, ans2);
