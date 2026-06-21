interface Person {
    name: string,
    age: number
};

// Re-open
interface Person {
    height: number
}

// Extension
interface Employee extends Person{
    empId: number
}

const employee: Employee = {
    name: "Abhishek",
    empId: 2001,
    age: 25,
    height: 168
}