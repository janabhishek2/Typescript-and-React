abstract class Employee {
    constructor(first: string, last: string) {};

    abstract getPay(): number;

    get fullName(): string{
        return `${this.first} ${this.last}`;
    }
    greet() {
        console.log(`Greetings of the day ${this.fullName}`)
    }
}

class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number) {
        super(first, last);
    }

    getPay(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(first: string, last: string, private hourlyPay: number, private hoursWorked: number) {
        super(first, last);
    }

    getPay(): number {
        return this.hourlyPay * this.hoursWorked
    }
}

const e1 = new FullTimeEmployee("Abhishek", "Jan", 2000);


const e2 = new PartTimeEmployee("Abhishek", "Jan", 10, 20);
const ans3 = e2.getPay();

console.log(ans3, e1.getPay());
