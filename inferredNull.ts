export const firstNameEl = document.getElementById("firstName");

if(!firstNameEl) {
    throw new Error("Could not find element");
}

console.log(firstNameEl.value);