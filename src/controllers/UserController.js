const knex = require('../database/knex');
const BaseController = require('./BaseController');
const {createUser, listUsers, findUserById, findUserByEmail, updateUser, deleteUser} = require('../services/UserService');
const bcrypt = require('bcryptjs');

class UsersController extends BaseController{
    create = async (req, res) => {
        try {
            const { name, email, password } = req.body;
            if (!name ||!email ||!password) return this.badRequest(res, 'Preencha todos os campos');
        
            await createUser(name, email, password);
            return this.created(res);

        }catch (error) {
            return this.internalError(res, error.message)
        }
    }

    list = async (req, res) => {
        try {
            const users = await listUsers();
            return this.ok(res, users);
        }catch (error) {
            return this.internalError(res, error.message)
        }
    }

    findById = async (req, res) => {
        try {
            const {id} = req.params
            const users = await findUserById(id)
            return this.ok(res, users)
        }catch (error) {
            return this.internalError(res, error.message)
        }
    }

    findByEmail = async (req, res) => {
        try {
            const {email} = req.params
            const users = await findUserByEmail(email)
            return this.ok(res, users)
        }catch (error) {
            return this.internalError(res, error.message)
        }
    }

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            await deleteUser(id);

            return this.ok(res, 'Usuário deletado com sucesso');
        }catch (error) {
            return this.internalError(res, error.message)
        }
    }

    update = async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const { id } = req.params;

            if (password) {
                const hashedPassword = await bcrypt.hash(password, 8);

                await updateUser(id, name, email, hashedPassword)

                return this.ok(res, 'Usuário atualizado com sucesso');
            } else {
                await updateUser(id, name, email)
                return this.ok(res, 'Usuário atualizado com sucesso');
            }
        } catch (error) {
            return this.internalError(res, error.message)
        }
    }
}

module.exports = UsersController;