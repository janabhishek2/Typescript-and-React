// Number return type
function add(a, b) {
    return a + b;
}
// Void return type: to share if a function will return nothing.
function mutateArr(arr) {
    arr.forEach(function (item) {
        item = item * 3;
    });
}
;
// never type: to signify if a function will never return something.
function logAndThrow(message) {
    console.log(message);
    throw new Error(message);
}
function performJob(cb) {
    cb('Job done');
}
var cb = function (msg) {
    console.log("Message is", msg);
};
performJob(cb);
