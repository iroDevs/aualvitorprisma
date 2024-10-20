import { FastifyReply, FastifyRequest } from "fastify";
import UsuarioService from "../services/usuario";


export default class UsuarioController{

    static async getAll(request: FastifyRequest, reply: FastifyReply){
        return reply.status(200).send({message: "Pegue todos"})
    }

    static async getOne(request: FastifyRequest, reply: FastifyReply){
        return {message: "Pegue um"}
    }

    static async create(request: FastifyRequest, reply: FastifyReply){
     const body = request.body;

        await UsuarioService.create(body);

        return reply.status(201).send({message: "Usuario criado com sucesso"})
    }

    static async update(request: FastifyRequest, reply: FastifyReply){
        return {message: "Atualize um"}
    }

    static async delete(request: FastifyRequest, reply: FastifyReply){
        return {message: "Delete um"}
    }

}