import { FastifyReply, FastifyRequest } from "fastify";

import { usuarioSchema } from "../../validate/usuario-schema";
import UsuarioRepositories from "../repositories/usuario";
import { MateriaServiceFactory } from "../../factory/materia-service-factory";


interface Request {
    params: {
        id: string
    }
}

export default class UsuarioController{

    static async getAll(request: FastifyRequest, reply: FastifyReply){
       const MateriaService = MateriaServiceFactory.create();
        const allUsers = await MateriaService.getAll({});


        return reply.status(200).send(allUsers);
    }

    static async getOne(request: Request, reply: FastifyReply){
        const MateriaService = MateriaServiceFactory.create();
        const materia = await MateriaService.getOne(request.params.id);
        return reply.status(200).send(materia);
    }

    static async create(request: FastifyRequest, reply: FastifyReply){
        const data = usuarioSchema.parse(request.body);
        const MateriaService = MateriaServiceFactory.create();

        await MateriaService.create(data);
        return reply.status(201).send({message: "Usuario criado com sucesso"})
    }

    static async update(request: FastifyRequest, reply: FastifyReply){
        return {message: "Atualize um"}
    }

    static async delete(request: FastifyRequest, reply: FastifyReply){
        return {message: "Delete um"}
    }

}