import { AppsErros } from "./AppsErros";

export class UserAlerdyExist extends AppsErros {
    constructor() {
        super("Usuario com este cpf, já existe em nossa base de dados", 400)
    }
}