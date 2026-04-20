const knex = require('../database/knex');
const bcrypt = require('bcryptjs');
const AppError = require('../utils/AppError');

const createUser = async (name, email, password) => {
    const isAdmin = false
    const hashedPassword = await bcrypt.hash(password, 8);

    const userExists = await knex('users').where({email}).first();
    if (userExists) throw new AppError('Usuário já cadastrado');

    const user = await knex("users").insert({ name, email, password: hashedPassword, isAdmin })
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    }
}

const listUsers = async () => {
    const users = await knex("users")
    return users;
}

const findUserById = async (id) => {
    const user = await knex("users").where({ id }).first()
    return user;
}

const findUserByEmail = async (email) => {
    const user = await knex("users").where({ email }).first()
    return user;
}

const updateUser = async (id, name, email, password) => {
    const user = await knex("users").where({ id }).first()

    if (!user) {
        throw new AppError('Usuário não encontrado');
    }
    

    if (email) user.email = email;
    if (name) user.name = name;
    if (password) user.password = password;

    await knex("users").where({ id }).update(user)
    return user;
}

const deleteUser = async (id) => {
    const user = await knex("users").where({ id }).first()
    
    if (!user) {
        throw new AppError('Usuário não encontrado');
    }

    await knex("users").where({ id }).delete()
    return;
}

module.exports = {
    createUser,
    listUsers,
    findUserById,
    findUserByEmail,
    updateUser,
    deleteUser
}