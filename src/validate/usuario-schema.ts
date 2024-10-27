import { any, z } from 'zod'

let usuarioSchema = z.object({
    nome: z.string(),
    cpf: z.string(),
    senha: z.string(),
    tipo: z.string(),
    idade: z.coerce.number(),
    professor: z.any().nullable(),
    aluno: z.any().nullable()
})

export  { usuarioSchema }
