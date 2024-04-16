export type UserRole = 'ADMIN' | 'USER';


export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: UserRole;
    createdAt: Date;
    
}














// 2da forma de hacerlo:

// export interface IUser {
//     id: number;
//     firstName: string;
//     lastName: string;
//     email: string;
//     role: 'ADMIN' | 'USER'
//     createdAt: Date;
    
// }