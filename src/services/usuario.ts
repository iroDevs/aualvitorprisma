import { Prisma } from "@prisma/client";
import seguranca from "../helpers/seguranca";
import UsuarioRepositories from "../http/repositories/usuario";
import { usuarioSchema } from "../validate/usuario-schema"
import { UserAlerdyExist } from "../erro/typesError/user-alerdy-exist";


export default class UsuarioService {
    static async getAll() {
        const allUsers = await UsuarioRepositories.getAll({});
        return allUsers;
    }

    static async getOne(id: string) {
        return "getOne";
    }

    static async create(novoUsuario: Prisma.UsuarioCreateInput) {
        let senha = novoUsuario.senha;
        novoUsuario.senha = await seguranca.hashPassword(senha);
        const existCpfInDatabase = await UsuarioRepositories.verifyUserExistByCpf(novoUsuario.cpf);

        if (existCpfInDatabase) {
            throw new UserAlerdyExist();
        }

        return await UsuarioRepositories.create(novoUsuario);
    }

    static async update(id: string, data: Prisma.UsuarioUpdateInput) {
        return "update";
    }
    static async delete(id: string) {
        return "delete";
    }
}