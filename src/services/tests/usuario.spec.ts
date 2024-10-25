import { InMemoryDBUsuario } from "../../database/InMemoryDb/usuario-in-memory";
import { compare, hash } from 'bcrypt'
import { expect, describe, it, beforeEach } from 'vitest'
import UsuarioService from "../usuario-service";
import { UserAlerdyExist } from "../../erro/typesError/user-alerdy-exist";


let usersRepository: InMemoryDBUsuario
let sut: UsuarioService

describe('Serviço de Usuario', () => {

    beforeEach(() => {
        usersRepository = new InMemoryDBUsuario()
        sut = new UsuarioService(usersRepository)
    })

    it('Deve ser possivel criar um usuario', async () => {
        await sut.create({
            nome: 'any_nome',
            cpf: 'any_cpf',
            tipo: 'any_tipo',
            senha: 'any_senha',
            idade: 20
        })
        const users = await sut.getAll()
        expect(users.length).toEqual(1)

    })

    it('Deve retornar todos os usuarios', async () => {
        await sut.create({
            nome: 'any_nome',
            cpf: 'any_cpf',
            tipo: 'any_tipo',
            senha: 'any_senha',
            idade: 20
        })
        await sut.create({
            nome: 'any_nome',
            cpf: 'any_cpf2',
            tipo: 'any_tipo',
            senha: 'any_senha',
            idade: 20
        })
        const users = await sut.getAll()
        expect(users.length).toEqual(2)
    })


    it('Deve ser possivel capturar um usuario por id', async () => {
        await sut.create({
            nome: 'any_nome',
            cpf: 'any_cpf',
            tipo: 'any_tipo',
            senha: 'any_senha',
            idade: 20
        })
        const usuarios = await sut.getAll();
        let id = `${usuarios[0].id}`
        const user = await sut.getOne(id)
        expect(user).toEqual(usuarios[0])
    });

    it('Deve ser possivel atualizar um usuario', async () => {
        await sut.create({
            nome: 'any_nome',
            cpf: 'any_cpf',
            tipo: 'any_tipo',
            senha: 'any_senha',
            idade: 20
        })
        const usuarios = await sut.getAll();
        let id = `${usuarios[0].id}`
        const user = await sut.update(id, {
            nome: 'any_nome',
            cpf: 'any_cpf',
            tipo: 'any_tipo',
            senha: 'any_senha',
            idade: 20
        })
        expect(user).toEqual(usuarios[0])
    })

    it('Deve ser possivel deletar um usuario', async () => {
        await sut.create({
            nome: 'any_nome',
            cpf: 'any_cpf',
            tipo: 'any_tipo',
            senha: 'any_senha',
            idade: 20
        })
        const usuarios = await sut.getAll();
        let id = `${usuarios[0].id}`
        const user = await sut.delete(id)
        const users = await sut.getAll()
        expect(users.length).toEqual(0)
    })

    it('Não pode haver dois usuarios com mesmo cpf', async () => {
        await sut.create({
            nome: 'any_nome',
            cpf: 'any_cpf',
            tipo: 'any_tipo',
            senha: 'any_senha',
            idade: 20
        })
        try {
            await sut.create({
                nome: 'any_nome',
                cpf: 'any_cpf',
                tipo: 'any_tipo',
                senha: 'any_senha',
                idade: 20
            })
        } catch (error) {
            expect(true).toEqual(error instanceof UserAlerdyExist)
        }
    })

    it('Deve ser possivel criar um usuario com senha criptografada', async () => {
        const senha = '123456'
        const hashedSenha = await hash(senha, 6)
        await sut.create({
            nome: 'any_nome',
            cpf: 'any_cpf',
            tipo: 'any_tipo',
            senha: senha,
            idade: 20
        })
        const users = await sut.getAll()
        const isPasswordMatch = await compare(senha, `${users[0].senha}`)
        expect(isPasswordMatch).toBe(true)

    })


})