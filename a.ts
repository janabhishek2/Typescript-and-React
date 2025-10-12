// Custom Role type
type Role = "admin" | "reader";

// Union type
type NumberOrString = number | string;

// Custom User type
type User = {
    name: string;
    age: NumberOrString;
    role: Role,
    permissions: string[]
};

const user: User = {
    name: "Abhishek",
    age: '23',
    role: "admin",
    permissions: ["read", "write"]
};

