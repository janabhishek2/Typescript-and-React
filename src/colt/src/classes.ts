class Person {
    public readonly first: string;
    public readonly last: string;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}

const person = new Person("Colt", "Steele");
console.log(person);
