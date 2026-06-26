const userNameEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir(userNameEl);
userNameEl.value = "12";

const buttonEl = document.querySelector<HTMLButtonElement>(".btn")!;
buttonEl.textContent = "here";
