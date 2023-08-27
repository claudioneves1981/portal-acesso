export interface UserLogin {
    username: string;
    password: string;
}

export interface User {
    usuario: string;
    token: string;
    roles: string[];
}

export interface UserAdministrativo{

    codigo: number;

	nome: string;

	usuario: string;

	senha: string;

	roles: string[];

}

export class Admin{

    codigo!: number;

	nome!: string;

	usuario!: string;

	senha!: string;

    roles!: string[];

    constructor() {
    }

}