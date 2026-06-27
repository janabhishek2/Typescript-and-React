function identity<T>(i: T): T {
    return i;
}

// arrow fn generic
const indentity1 = <T>(i: T): T => {
    return i;
}

// Multiple type generics.
function merge<T extends object,U extends object>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2
    }
}

// function newMerge(item1: object, item2: object) : object {
//     return {
//         ...item1,
//         ...item2
//     }
// }

const obj1 = {
    a: 1,
    b: [1, 2, 3]
};
const obj2 = {
    b: 2
};

// let merged = merge(obj1, obj2);
// console.log(merged);


interface Rectangle {
    length: number,
    breadth: number
}

interface ContainsLength {
    length: number
}

function getDoubleLength<T extends ContainsLength>(item: T): number {
    return item.length * 2;
}

interface Rectangle {
    length: number,
    breadth: number,
}

const rectangle = {
    length: 3,
    breadth: 4,
}

const square = {
    length : 3
}

let doubleLen = getDoubleLength(rectangle);
