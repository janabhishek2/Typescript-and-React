function log(msg: string): void {
    console.log(msg);
}

function performJob(cb: (m: string) => void) {
    cb("Job executed !!");
};

type Greet = (msg: string) => void

type User = {
    name: string;
    age: number;
    greet: Greet,
    randomFunc: Function
}

const user: User = {
    name: "Abhishek",
    age: 24,
    greet: (a) => {},
    randomFunc: () => {}
};

