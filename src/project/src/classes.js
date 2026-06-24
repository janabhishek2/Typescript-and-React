class Person {

    static description = "This is player desc"

    static randomPerson() {
        function getRandomName(len) {
            let str = "";
            let temp = 0;
            for(let i = 0; i<len; i++) {
                temp = Math.floor((Math.random())*100)
                while(temp < 97 || temp > 123) temp = Math.floor((Math.random())*100);
                str += String.fromCharCode(temp);
            }
            return str;
        }

        let firstNameLength = Math.floor((Math.random())*10);
        let lastNameLength = Math.floor((Math.random())*10);

        while(firstNameLength <= 1) firstNameLength = Math.floor((Math.random())*10);
        while(lastNameLength <=1 ) lastNameLength = Math.floor((Math.random())*10);

        const randomFirstName = getRandomName(firstNameLength);
        const randomLastName = getRandomName(lastNameLength);

        return new Person(randomFirstName, randomLastName);
    }
    score = 0;
    numLives = 10;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    taunt() {
        console.log("by")
    }
};

const person = new Person("Abhishek", "Jan");

const randomPerson = Person.randomPerson();

console.log(person.fullName, randomPerson.fullName)