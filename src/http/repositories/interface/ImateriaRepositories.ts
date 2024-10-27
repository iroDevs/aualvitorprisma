import { Prisma, Usuario } from "@prisma/client";
import IFiltro from "./IFiltroMateria";

export interface ImateriaRepositories {
    create(data: Prisma.MateriaUncheckedCreateInput): Promise<Prisma.MateriaUncheckedCreateInput>;
    getAll(filtro: IFiltro): Promise<Prisma.MateriaUncheckedCreateInput[] >;
    getOne(id: string): Promise<Prisma.MateriaUncheckedCreateInput>;
    update(id: string, data: Usuario): Promise<Prisma.MateriaUncheckedCreateInput>;
    delete(id: string): Promise<String>;
}