import seguranca from "../../helpers/seguranca";
import UsuarioRepositories from "../repositories/usuario";
import { z } from "zod";


export default class UsuarioService {
    static async getAll() {
        return "getAll";
    }
    static async getOne(id: string) {
        return "getOne";
    }
    static async create(data: any) {

        let schema = z.object({
            nome: z.string(),
            cpf: z.string(),
            senha: z.string(),
            tipo: z.string(),
            idade: z.coerce.number()
        })

        let novoUsuario = schema.parse(data);
        let senha = novoUsuario.senha;
        let senhaCriptografada = await seguranca.hashPassword(senha);
        novoUsuario.senha = senhaCriptografada;

        const existCpfInDatabase = await UsuarioRepositories.getByCpf(novoUsuario.cpf);

        if (existCpfInDatabase) {
            throw new Error("CPF já cadastrado");
        }

        return await UsuarioRepositories.create(novoUsuario);
    }

    static async update(id: string, data: any) {
        return "update";
    }
    static async delete(id: string) {
        return "delete";
    }
}