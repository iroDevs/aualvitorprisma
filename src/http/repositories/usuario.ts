import { Prisma, Usuario } from "@prisma/client"
import prisma from "../../database/prisma"
import { IusuarioRepositories } from "./interface/IusuarioRepositories"
import IFiltro from "./interface/IFiltro";



export default class UsuarioRepositories implements IusuarioRepositories {
     async create(data: Prisma.UsuarioCreateInput): Promise<Prisma.UsuarioCreateInput>{
        return await prisma.usuario.create({
            data
        })
    }

     async getAll(filtro : IFiltro): Promise<Prisma.UsuarioUncheckedUpdateInput[]>{
       const where = Object.fromEntries(
        Object.entries(filtro).filter(([_, value]) => value !== undefined && value !== null)
      );

        return await prisma.usuario.findMany({
            select: {
                nome: true,
                cpf: true,
                tipo: true,
                id: true,
            },
            where
        })
    }

    async verifyUserExistByCpf(cpf: string): Promise<number | undefined>{
        return await prisma.usuario.count({
            where: {
                cpf
            }
        })
    }

     async getOne(id: string): Promise<Usuario | null>{
        return await prisma.usuario.findUnique({
            where: {
                id
            }
        })
    }

     async update(id: string, data: any): Promise<Prisma.UsuarioUncheckedUpdateInput | null> {
        return await prisma.usuario.update({
            where: {
                id
            },
            data
        })
    }

     async delete(id: string): Promise<String>{
        await prisma.usuario.delete({
            where: {
                id
            }
        })

        return "Usuario deletado com sucesso"
    }
}