import type { Person } from './types.js';

export class User implements Person {
    constructor(public username: string, public email: string) {};

    logout() {
        console.log(`${this.username} has logged out!`);
    }
};


