import Fastify from "fastify";
import RouteUsuario from "./http/routes/usuario";
import { FastifyRequest, FastifyReply } from "fastify";

import {ErrorGlobalHandler} from "./erro/ErrorHandlers"
const app = Fastify();

app.register(RouteUsuario, { prefix: "/usuario" });
//usuario

//Aluno

//Professor

//Materia







app.setErrorHandler((error: Error, request: FastifyRequest, reply: FastifyReply) => {
    ErrorGlobalHandler.execute(error, request, reply);
});


export default app;


// GET , POST , PUT , DELETE