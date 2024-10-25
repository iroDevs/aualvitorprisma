import { Prisma } from "@prisma/client";
import seguranca from "../helpers/seguranca";
import UsuarioRepositories from "../http/repositories/usuario";
import { usuarioSchema } from "../validate/usuario-schema"
import { UserAlerdyExist } from "../erro/typesError/user-alerdy-exist";
import { ResourceNotFound } from "../erro/typesError/resouce-not-found";




export default class UsuarioService  {
    constructor ( private usuarioRepositories: UsuarioRepositories) {}

     async getAll() {
        const allUsers = await this.usuarioRepositories.getAll({});
        return allUsers;
    }

     async getOne(id: string) {
        const user = await this.usuarioRepositories.getOne(id);

        if (user === null) {
            throw new ResourceNotFound();
        }

        return user;
    }

     async create(novoUsuario: Prisma.UsuarioCreateInput) {
        let senha = novoUsuario.senha;
        novoUsuario.senha = await seguranca.hashPassword(senha);
        const existCpfInDatabase = await this.usuarioRepositories.verifyUserExistByCpf(novoUsuario.cpf);

        if (existCpfInDatabase) {
            throw new UserAlerdyExist();
        }

        return await this.usuarioRepositories.create(novoUsuario);
    }

     async update(id: string, data: Prisma.UsuarioUpdateInput) {
        const user = await this.usuarioRepositories.getOne(id);

        if (user === null) {
            throw new ResourceNotFound();
        }

        return await this.usuarioRepositories.update(id, data);
    }
     async delete(id: string) {
        return await this.usuarioRepositories.delete(id);
    }
}
