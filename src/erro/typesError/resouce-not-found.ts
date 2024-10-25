import { AppsErros } from "./AppsErros";

export class ResourceNotFound extends AppsErros {
    constructor() {
        super("Informação não encontrada", 400)
    }
}