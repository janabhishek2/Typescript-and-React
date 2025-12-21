var process = function (val) {
    // By enforcing the unknown type, we make sure to check if log method exists in val object.
    if (typeof val === "object" && !!val && "log" in val && typeof val.log === "function") {
        val.log();
    }
};
// Optional params
function generateError(msg) {
    console.log(msg);
    // throw new Error(msg);
}
generateError()
