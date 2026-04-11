function multiply(x: number, y: number): number {
    return x * y;
}

const ans = multiply(3, 4);

const addNums = (x: number, y: number): number => {
    return x + y;
};

const ans1 = addNums(3, 4);

function alertUser(msg: string): void {
    console.log(msg);
    console.log(msg);
}

const alert = (msg: string): void => {
    console.log(msg);
}

function makeError(msg: string): never {
    throw new Error("error message");
}