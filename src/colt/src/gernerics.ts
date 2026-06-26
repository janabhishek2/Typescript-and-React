const userNameEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir(userNameEl);
userNameEl.value = "12";

const buttonEl = document.querySelector<HTMLButtonElement>(".btn")!;
buttonEl.textContent = "here";

function identity<T>(inp: T): T {
    return inp;
}

// function firstElement<T>(arr: T[]): T {
//     return arr[0];
// }

function firstElement(x: any): any {
    return x[0];
}

const arr1 = [2, 3, 4];
const arr3 = ['1', '2'];

const el = firstElement(arr1);
const el1 = firstElement(arr3);