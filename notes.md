What is TS + Why ?
1. Inferred types: when we initialise a value to a variable, the typeof value is infereed.
2. Type assignment: (:number) is used to specify which type of value wull be stored in var.
3. Types: number, string, boolean, function, union --> ( number | string), any.
4. Types: array(number[], string[], (number|string)[]).
5. Array as generic type: Array<number|string>.
6. Tuples: let possibleResults: [number, number] ---> Will store exactly 2 numbers in an array.
7. Object types: (const obj: {...def} = {...value}) will store the definition of object.
8. type aliases / custom types : useful for storing fixed values in a type definition.
9. never--> return type for functions which throws error during execution + do not return anything.
10. void --> return type for functions which do not return anything.