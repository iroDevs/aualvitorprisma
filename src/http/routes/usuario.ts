import { FastifyInstance } from "fastify";
import UsuarioController from "../controllers/usuario";


export default async function RouteUsuario(app: FastifyInstance) {
    app.get("/", UsuarioController.getAll)
    app.get("/:id", UsuarioController.getOne)
    app.post("/", UsuarioController.create)
    app.put("/:id", UsuarioController.update)
    app.delete("/:id", UsuarioController.delete)

}