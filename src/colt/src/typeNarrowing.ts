// interface Cat {
//     name: string,
//     sound(): void
// }

// interface Dog {
//     name: string,
//     breed: string,
// };

// const cat: Cat = {
//     name: "Billa",
//     sound: () => {
//         console.log("Meow")
//     }
// }

// const dog: Dog = {
//     name: "Dogg",
//     breed: "margherita"
// };

// const talk = (creature: Cat | Dog) => {
//     if("sound" in creature) {
//        creature.sound();
//     }
// }

// // talk(cat);
// // talk(dog);

// function printFullDate(d: Date | string): void {
//     if(d instanceof Date) {
//         console.log(d.toUTCString());
//     } else {
//         const dt = new Date(d);
//         console.log(dt.toUTCString());
//     }
// }

// printFullDate("03/22/2022");
// printFullDate(new Date());