export const firstNameEl = document.getElementById("firstName")!;

// By placing ! after getElementById, we stop the null check from TS and can access it without the 
// mandatory null check

// if(!firstNameEl) {
//     throw new Error("Could not find element");
// }

console.log(firstNameEl.value);