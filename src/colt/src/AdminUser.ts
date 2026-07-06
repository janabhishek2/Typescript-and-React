import User from './User';

export default class AdminUser extends User {
    public isAdmin: boolean;
    constructor(...args: [string, string]) {
        super(...args);
        this.isAdmin = true;
    }

    public getIsAdmin(): boolean {
        return this.isAdmin;
    }
};
