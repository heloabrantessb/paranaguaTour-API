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

module.exports = {
    createUser,
}