import prisma from "../../database/prisma"




export default class UsuarioRepositories{
    static async create(data: any){
        return await prisma.usuario.create({
            data
        })
    }

    static async getAll(){
        return await prisma.usuario.findMany()
    }

    static async getByCpf(cpf: string){
        return await prisma.usuario.findFirst({
            where: {
                cpf
            }
        })
    }

    static async getOne(id: string){
        return await prisma.usuario.findUnique({
            where: {
                id
            }
        })
    }

    static async update(id: string, data: any){
        return await prisma.usuario.update({
            where: {
                id
            },
            data
        })
    }

    static async delete(id: string){
        return await prisma.usuario.delete({
            where: {
                id
            }
        })
    }
}