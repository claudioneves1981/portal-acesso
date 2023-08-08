export interface UserLogin {
    login: string;
    senha: string;
}

export interface User {
    usuario: string;
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