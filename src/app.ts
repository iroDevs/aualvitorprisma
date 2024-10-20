import Fastify from "fastify";
import RouteUsuario from "./http/routes/usuario";
const app = Fastify();

app.register(RouteUsuario, { prefix: "/usuario" });
//usuario

//Aluno

//Professor

//Materia






export default app;


// GET , POST , PUT , DELETE