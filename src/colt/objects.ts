
const getFullName = (name: { first: string, last: string}): string => {
    return `FirstName: ${name?.first}, LastName: ${name?.last}`; 
}

const ans = getFullName({ first: "Abhishek", last: "Jan" });

console.log(ans);

// Type aliases

type Point = {
    x: number,
    y: number
};

const getRandomPoint = (): Point => {
    const point = {
        x: Math.random(),
        y: Math.random(),
    };
    console.log(point);
    return point;
};

const getDoublePoint = (point: Point): Point => {
    return {
        x: point.x * 2,
        y: point.y * 2
    }
};

const doublePoint = getDoublePoint(getRandomPoint());
console.log(doublePoint);
