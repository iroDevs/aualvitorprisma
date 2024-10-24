import { Prisma, Usuario } from "@prisma/client";
import IFiltro from "../../http/repositories/interface/IFiltro";
import { IusuarioRepositories } from "../../http/repositories/interface/IusuarioRepositories";

export class InMemoryDBUsuario implements IusuarioRepositories {
    public usuarios: Usuario[] = [];

    async create(data: Usuario){
        data.id = crypto.randomUUID();
        this.usuarios.push(data);
        return this.usuarios[this.usuarios.length - 1];
    }


   async getAll(filtro: IFiltro) {
        let usuarios = this.usuarios;
        if (filtro?.nome) {
            usuarios = usuarios.filter(usuario => usuario.nome === filtro.nome);
        }
        if (filtro?.cpf) {
            usuarios = usuarios.filter(usuario => usuario.cpf === filtro.cpf);
        }
        if (filtro?.tipo) {
            usuarios = usuarios.filter(usuario => usuario.tipo === filtro.tipo);
        }
        return usuarios;
    }

    async verifyUserExistByCpf(cpf: string): Promise<number | undefined> {
        return this.usuarios.filter(usuario => usuario.cpf === cpf).length;
    }
    async getOne(id: string): Promise<Usuario | null> {
        return this.usuarios.find(usuario => usuario.id === id) || null;
    }

    async update(id: string, data: Usuario): Promise<Prisma.UsuarioUncheckedUpdateInput | null> {
        let usuarios = this.usuarios;
        const index = usuarios.findIndex(usuario => usuario.id === id);
        if (index === -1) {
            return null;
        }
        usuarios[index] = data;
        return usuarios[index];

    }
    async delete(id: string): Promise<String> {
        let usuarios = this.usuarios;
        const index = usuarios.findIndex(usuario => usuario.id === id);
        if (index === -1) {
            return "Usuario não encontrado";
        }
        usuarios.splice(index, 1);
        return "Usuario deletado com sucesso";
    }

}