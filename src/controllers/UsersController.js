const knex = require('../database/knex');
const bcrypt = require('bcryptjs');
const AppError = require('../utils/AppError');
const {createUser, listUsers, findUserById, findUserByEmail, deleteUser} = require('../services/UserService');

class UsersController {
    async create(req, res) {
        const { name, email, password } = req.body;

        if (!name ||!email ||!password) {
            return res.status(400).json({ error: 'Preencha todos os campos' });
        }

        const userExists = await findUserByEmail(email);
        if (userExists) {
            throw new AppError('Usuário já cadastrado');
        }

        const hashedPassword = await bcrypt.hash(password, 8);

        await createUser(name, email, hashedPassword);

        return res.status(201).json('Usuário criado com sucesso');
    }

    async list(req, res) {
        const users = await listUsers();
        return res.status(200).json(users);
    }

    async findById(req, res) {
        const {id} = req.params
        const users = await findUserById(id)
        return res.status(200).json(users)
    }

    async findByEmail(req, res) {
        const {email} = req.params
        const users = await findUserByEmail(email)
        return res.status(200).json(users)
    }

    async delete(req, res) {
        const { id } = req.params;
        await deleteUser(id);

        return res.status(200).json('Ususário deletado com sucesso');
    }

    async update(req, res) {
        const { name, email, password } = req.body;
        const { id } = req.user;

        if (email) {
            const userExists = await findUserByEmail(email);
            if (userExists) {
                throw new AppError('Usuário já cadastrado');
            }
        }

        if (password) {
            const hashedPassword = await bcrypt.hash(password, 8);

            await this.updateUser(id, name, email, hashedPassword)

            return res.status(200).json('Usuário atualizado com sucesso');
        } else {
            await this.updateUser(id, name, email)
            return res.status(200).json('Usuário atualizado com sucesso');
        }
    }
}

module.exports = UsersController;