type User = {
    // id is now read-only. We can not edit it
   readonly id: number,
    name: string
};

const user: User = {
    id: 1,
    name: "Abhishek Jan"
};

user.name = "New Name";