class Person {
    protected _score: number = 0;
    private getFullName() {
        console.log("Full Name");
    }

    get score() {
        return this._score;
    }

    set score(newScore) {
        if(newScore > 0) {
            this._score = newScore;
        }
    }
    // Parameter properties
    constructor(public first: string, public last: string) {}
}

class Admin extends Person {
    isAdmin: boolean;
    constructor(...args: [string, string]) {
        super(...args);
        this.isAdmin = true;
    }
    public maxScore(): void {
        this._score = 999;
    }
}

const admin = new Admin("Colt", "Steele");
admin.score = 200;

