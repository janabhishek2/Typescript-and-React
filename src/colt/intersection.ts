type Triangle = {
    base: number,
    height: number
};

type Color = {
    color: string
};

type ColoredRightTriange = Triangle & Color & {
    age: number
};

const coloredRightTriange: ColoredRightTriange = {
    base: 12,
    height: 5,
    color: "red",
    age: 24
};

console.log(coloredRightTriange);
