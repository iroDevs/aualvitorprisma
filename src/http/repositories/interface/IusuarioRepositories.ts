import { Prisma, Usuario } from "@prisma/client";
import IFiltro from "./IFiltro";

export interface IusuarioRepositories {
    create(data: Prisma.UsuarioCreateInput): Promise<Prisma.UsuarioCreateInput>;
    getAll(filtro: IFiltro): Promise<Prisma.UsuarioUncheckedUpdateInput[] >;
    verifyUserExistByCpf(cpf: string): Promise<number | undefined>;
    getOne(id: string): Promise<Usuario | null>;
    update(id: string, data: Usuario): Promise<Prisma.UsuarioUncheckedUpdateInput | null>;
    delete(id: string): Promise<String>;
}