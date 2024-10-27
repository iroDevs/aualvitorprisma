import { Prisma } from "@prisma/client";
import seguranca from "../helpers/seguranca";
import MateriaRepositories from "../http/repositories/Materia";
import { usuarioSchema } from "../validate/usuario-schema"
import { UserAlerdyExist } from "../erro/typesError/user-alerdy-exist";
import { ResourceNotFound } from "../erro/typesError/resouce-not-found";
import { Imateria } from "./interfaces/Imateria";
import IFiltro from "../http/repositories/interface/IFiltroMateria";

export default class UsuarioService implements Imateria {
    constructor(private materiaRepositories: MateriaRepositories) {}

    async create(data: Prisma.MateriaUncheckedCreateInput): Promise<Prisma.MateriaUncheckedCreateInput> {
        return this.materiaRepositories.create(data);
    }

    async getAll(filtro: IFiltro): Promise<Prisma.MateriaUncheckedCreateInput[]> {
        return this.materiaRepositories.getAll(filtro);
    }

    async getOne(id: string): Promise<Prisma.MateriaUncheckedCreateInput> {
        const materia = await this.materiaRepositories.getOne(id);
        return materia;
    }

    async update(id: string, data: Prisma.MateriaUncheckedCreateInput): Promise<Prisma.MateriaUncheckedCreateInput> {
        return this.materiaRepositories.update(id, data);
    }

    async delete(id: string): Promise<string> {
        const materia = await this.materiaRepositories.getOne(id);
        if (!materia) {
            throw new ResourceNotFound();
        }
        await this.materiaRepositories.delete(id);
        return "Materia deleted successfully";
    }
}
