import { Prisma } from "@prisma/client"
import prisma from "../../database/prisma"

interface Filtro  {
    id?: string
    cpf?: string
    tipo?: string
    nome?: string
}


export default class UsuarioRepositories{
     async create(data: Prisma.UsuarioCreateInput){
        return await prisma.usuario.create({
            data
        })
    }

     async getAll(filtro : Filtro){
       const where = Object.fromEntries(
        Object.entries(filtro).filter(([_, value]) => value !== undefined && value !== null)
      );

        return await prisma.usuario.findMany({
            select: {
                nome: true,
                cpf: true,
                tipo: true,
                id: true

            },
            where
        })
    }

    async verifyUserExistByCpf(cpf: string){
        return await prisma.usuario.count({
            where: {
                cpf
            }
        })
    }

     async getOne(id: string){
        return await prisma.usuario.findUnique({
            where: {
                id
            }
        })
    }

     async update(id: string, data: any){
        return await prisma.usuario.update({
            where: {
                id
            },
            data
        })
    }

     async delete(id: string){
        return await prisma.usuario.delete({
            where: {
                id
            }
        })
    }
}