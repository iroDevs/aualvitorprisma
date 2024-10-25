import { AppsErros } from "./AppsErros";

export class LoginNotValid extends AppsErros {
    constructor() {
        super("Senha ou email incorretos", 400)
    }
}