class Person {

    private getFullName() {
        console.log("Full Name");
    }
    // Parameter properties
    constructor(public first: string, public last: string, public score: number = 0) {}
}

const person = new Person("Colt", "Steele");
console.log(person);
