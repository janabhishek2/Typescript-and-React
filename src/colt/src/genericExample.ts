function getRandomNumber<T>(arr: T[]) :T | undefined {
    const randomNumber = Math.floor(Math.random() * 100);
    const randIndex = randomNumber % (arr.length);

    return arr[randIndex];
}

const arrStrings = ["abcd", "efgh"];
const arrNums = [1, 2, 3, 4, 5];
const arrBools = [true, false, false, true];

// inferred type
const randomNumberArr = getRandomNumber(arrNums);
console.log(randomNumberArr);

// non inferred explicit 
// const btn1 = document.querySelector<HTMLButtonElement>(".btn1");
// console.log(btn1);
