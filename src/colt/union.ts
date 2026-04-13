type Point = {
    x: number,
    y: number
};

type Loc = {
    lat: number,
    long: number
};

let point: Point | Loc = {
    x: 3,
    y: 4
};

point = {
    lat: 3,
    long: 4,
}
