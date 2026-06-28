interface Ramesh {
    name: string,
    age: number,
    // _type: discrminated union: means a property which serves as 
    // a distinguisher between multiple interfaces.
    _type: "ramesh"
}

interface Abhishek {
    name: string;
    age: number,
     _type: "abhishek"
};

interface Goya {
    name: string,
    age: number,
     _type: "goya"
}

type Persons = Ramesh | Abhishek | Goya ;

const getPersonLikes = (person: Persons): string => {
    switch (person._type) {
        case "abhishek": {
            return "huihui"
        }
        case "ramesh": {
            return "Betha hai"
        }
        case "goya": {
            return "mithai"
        }
        default: {
            // Means we missed handling Goya in our cases
            const _exhaustiveCheck: never = person;
            return _exhaustiveCheck;
        }
    }
}