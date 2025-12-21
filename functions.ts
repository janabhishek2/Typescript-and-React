// Number return type
function add(a: number, b: number) : number {
    return a + b ;
}

// Void return type: to share if a function will return nothing.
function mutateArr(arr: number[]): void {
    arr.forEach((item) => {
        item = item * 3;
    })
};

// never type: to signify if a function will never return something.
function logAndThrow(message: string): never {
    console.log(message);
    throw new Error(message);
}

// function types

type PerformJobCbType = (msg: string) => void; 

function performJob(cb: PerformJobCbType) {
    cb('Job done');
}

const cb = (msg: string) => {
    console.log("Message is", msg);
};

performJob(cb);
