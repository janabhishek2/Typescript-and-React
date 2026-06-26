function getRandomNumber<T>(arr: T[]) :T {
    const randomNumber = Math.floor(Math.random() * 100);
    const randIndex = randomNumber % (arr.length);

    return arr[randIndex];
}

const arrStrings = ["abcd", "efgh"];
const arrNums = [1, 2, 3, 4, 5];
const arrBools = [true, false, false, true];

const randomNumberArr = getRandomNumber(arrNums);
console.log(randomNumberArr);