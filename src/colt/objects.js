var getFullName = function (name) {
    return "FirstName: ".concat(name === null || name === void 0 ? void 0 : name.first, ", LastName: ").concat(name === null || name === void 0 ? void 0 : name.last);
};
var ans = getFullName({ first: "Abhishek", last: "Jan" });
console.log(ans);
var getRandomPoint = function () {
    var point = {
        x: Math.random(),
        y: Math.random(),
    };
    console.log(point);
    return point;
};
var getDoublePoint = function (point) {
    return {
        x: point.x * 2,
        y: point.y * 2
    };
};
var doublePoint = getDoublePoint(getRandomPoint());
console.log(doublePoint);
