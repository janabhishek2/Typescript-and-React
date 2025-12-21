enum Role {
    Admin, 
    Editor,
    Guest
}

let userRole: Role = Role.Admin;

const ans: any = Role[0];

userRole = Role.Guest;

// Literal types

let specialAttributes: 'sib__blocklisted' | 'sib__subscribed';
specialAttributes = "sib__subscribed";
