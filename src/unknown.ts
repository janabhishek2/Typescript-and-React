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

// optional params

enum USER_TYPES {
    Admin,
    Guest
}
type User = {
    name: string,
    role?: USER_TYPES.Admin | USER_TYPES.Guest
};


const anand: User = {
    name: "Anand",
    role: USER_TYPES.Guest
}

const abhishek: User = {
    name: "Abhishek",
    role: USER_TYPES.Admin
}

