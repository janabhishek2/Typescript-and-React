// 1 is default fror
const add = (a: number  ,b: number =1) => a+b;

const printOut: (output: string | number) => void = output => console.log(output);

printOut(add(3));
