const knex = require('../database/knex');
const User = require("../models/User")

const createUser = async (name, email, password) => {
    const isAdmin = false
    const user = await knex("users").insert({ name, email, password, isAdmin })
    return {
        id: User.id,
        name: User.name,
        email: User.email,
        isAdmin: User.isAdmin
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