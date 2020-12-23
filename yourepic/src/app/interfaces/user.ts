import Role from "./role";

export default interface User{
    id: number;
    email: string;
    name: string;
    role: Role;
}