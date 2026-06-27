interface Cat {
    name: string,
    meow(): void
};

interface Dog {
    name: string,
    bark(): void
}

// Use this syntax to make generic function to get a type of an object
// Check if a property exists
// The return type shows if animal is Cat is true to TS.

function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).meow !== undefined;
}

function makeNoise(animal: Cat | Dog): void {
    if(isCat(animal)) {
        animal.meow()
    } else {
        animal.bark();
    }
}