import { FastifyReply, FastifyRequest } from "fastify";
import UsuarioService from "../../services/usuario";
import { usuarioSchema } from "../../validate/usuario-schema";
import UsuarioRepositories from "../repositories/usuario";
import { UsuarioServicesFactory } from "../../factory/usuario-service-factory";


export default class UsuarioController{

    static async getAll(request: FastifyRequest, reply: FastifyReply){
       const usuarioService = UsuarioServicesFactory.create();
        const allUsers = await usuarioService.getAll();


        return reply.status(200).send(allUsers);
    }

    static async getOne(request: FastifyRequest, reply: FastifyReply){
        return {message: "Pegue um"}
    }

    static async create(request: FastifyRequest, reply: FastifyReply){
        const data = usuarioSchema.parse(request.body);
        const usuarioService = UsuarioServicesFactory.create();

        await usuarioService.create(data);
        return reply.status(201).send({message: "Usuario criado com sucesso"})
    }

    static async update(request: FastifyRequest, reply: FastifyReply){
        return {message: "Atualize um"}
    }

    static async delete(request: FastifyRequest, reply: FastifyReply){
        return {message: "Delete um"}
    }

}