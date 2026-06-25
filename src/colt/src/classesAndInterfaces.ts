interface ColorFul {
    color: string;
};

interface Printable {
    print(): void;
}

class Bike implements ColorFul {
    constructor(public color: string){};
}

class Jacket implements ColorFul, Printable {
    constructor(public color: string){};

    public print() {
        console.log("print this jacket!");
    }
}