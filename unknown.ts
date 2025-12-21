const process = (val: unknown) => {
    // By enforcing the unknown type, we make sure to check if log method exists in val object.
    if(typeof val === "object" && !!val && "log" in val && typeof val.log === "function") {
        val.log();
    }
}

// Optional params

// msg can be undefined
function generateError(msg ?: string) {
    throw new Error(msg);
}

console.log(generateError());