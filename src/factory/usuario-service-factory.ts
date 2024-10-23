import UsuarioRepositories from "../http/repositories/usuario";
import UsuarioService from "../services/usuario";

export class UsuarioServicesFactory {
    static create() {
        const usuarioRepositories = new UsuarioRepositories();
        return new UsuarioService(usuarioRepositories);
    }
}