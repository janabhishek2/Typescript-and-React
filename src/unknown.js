var process = function (val) {
    // By enforcing the unknown type, we make sure to check if log method exists in val object.
    if (typeof val === "object" && !!val && "log" in val && typeof val.log === "function") {
        val.log();
    }
};
// Optional params
// msg can be undefined
function generateError(msg) {
    throw new Error(msg);
}
console.log(generateError());
// optional params
var USER_TYPES;
(function (USER_TYPES) {
    USER_TYPES[USER_TYPES["Admin"] = 0] = "Admin";
    USER_TYPES[USER_TYPES["Guest"] = 1] = "Guest";
})(USER_TYPES || (USER_TYPES = {}));
var anand = {
    name: "Anand",
    role: USER_TYPES.Guest
};
var abhishek = {
    name: "Abhishek",
    role: USER_TYPES.Admin
};
