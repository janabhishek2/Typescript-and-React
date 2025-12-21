type Role = 'admin' | 'guest' | 'user';

type User = {
    name: string,
    role: Role
}

const user: User = {
    name: "Abhishek",
    role: "admin"
}