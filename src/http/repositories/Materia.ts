import { Prisma, Usuario } from "@prisma/client"
import prisma from "../../database/prisma"
import { ImateriaRepositories } from "./interface/ImateriaRepositories"
import IFiltro from "./interface/IFiltroMateria";
import { ResourceNotFound } from "../../erro/typesError/resouce-not-found";



export default class MateriaRepositories implements ImateriaRepositories{
    async create(data: Prisma.MateriaUncheckedCreateInput): Promise<Prisma.MateriaUncheckedCreateInput> {
        return await prisma.materia.create({
            data
        })
    }

    async getAll(filtro: IFiltro): Promise<Prisma.MateriaUncheckedCreateInput[]> {
        return await prisma.materia.findMany({
            where: {
                nome: {
                    contains: filtro.nome
                }
            }
        })
    }

    async getOne(id: string): Promise<Prisma.MateriaUncheckedCreateInput> {
        const materia = await prisma.materia.findUnique({
            where: {
                id
            }
        })

        if (!materia) {
            throw new ResourceNotFound()
        }

        return materia
    }

    async update(id: string, data: Prisma.MateriaUncheckedCreateInput): Promise<Prisma.MateriaUncheckedCreateInput> {
        return await prisma.materia.update({
            where: {
                id
            },
            data
        })
    }

    async delete(id: string): Promise<String> {
        await prisma.materia.delete({
            where: {
                id
            }
        })
        return "Materia deletada com sucesso"
    }

}