import { ZodError } from "zod"
import { UserAlerdyExist } from "./typesError/user-alerdy-exist"
import { AppsErros } from "./typesError/AppsErros"
import env from "../env/variaveis";
import { emitWarning } from "process";


export class ErrorGlobalHandler {
    static execute(
        error: Error,
        request: any,
        reply: any
    ) {

        if (error instanceof AppsErros) {
            return reply.status(error.statusCode).send({ message: error.message })
        }

        if (error instanceof ZodError) {
            const variavelInvalida = error.errors[0].path[0];
            return reply.status(400).send({ message: error.errors[0].message, invalidField: variavelInvalida })
        }

        if (env.NODE_ENV === "development") {
            console.log(error);
        }

        return reply.status().send({ message: "Erro interno" })
    }

}