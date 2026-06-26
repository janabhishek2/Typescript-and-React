function identity<T>(i: T): T {
    return i;
}

// arrow fn generic
const indentity1 = <T>(i: T): T => {
    return i;
}

// Multiple type generics.
function merge<T,U>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2
    }
}

const obj1 = {
    a: 1,
    b: [1, 2, 3]
};
const obj2 = {
    b: 2
};

let merged = merge(obj1, obj2);
console.log(merged);
