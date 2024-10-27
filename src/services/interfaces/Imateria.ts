import { Prisma } from "@prisma/client";
import IFiltro from "../../http/repositories/interface/IFiltroMateria";

export interface Imateria {
    create(data: Prisma.MateriaUncheckedCreateInput): Promise<Prisma.MateriaUncheckedCreateInput>
    getAll(filtro: IFiltro): Promise<Prisma.MateriaUncheckedCreateInput[]>
    getOne(id: string): Promise<Prisma.MateriaUncheckedCreateInput>
    update(id: string, data: Prisma.MateriaUncheckedCreateInput): Promise<Prisma.MateriaUncheckedCreateInput>
    delete(id: string): Promise<String>

}