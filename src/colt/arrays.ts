const nums: number[] = [1, 2, 3, 4];

console.log(nums);

const names: Array<string> = ["Abhishek", "Joan"];

type Point = {
  x: number;
  y: number;
};

const point1: Point = {
  x: 1,
  y: 2,
};

const point2: Point = {
  x: 3,
  y: 5,
};

const points: Point[] = [point1, point2];

// multi dimension arrays

// array of array of strings
type Board = number[][];

const board: Board = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(board);
