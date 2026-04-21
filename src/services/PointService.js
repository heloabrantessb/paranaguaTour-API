const knex = require('../database/knex');

const createPoint = async (name, description, location, category) => {
    const point = await knex('points').insert({
        name,
        description,
        location,
        category,
    })
    return point
}

const listPoints = async () => {
    const points = await knex('points');
    return points
}

const findPointById = async (id) => {
    const point = await knex('points').where({id}).first()
    return point
}
const updatePoint = async (id, name, description, location, category) => {
    const point = this.findPointById(id)

    if (!point) throw new Error('Ponto não encontrado')

    if(name) point.name = name
    if(description) point.description = description
    if(location) point.location = location
    if(category) point.category = category

    await knex('points').where({id}).update({
        name: point.name,
        description: point.description,
        location: point.location,
        category: point.category
    })
}
const deletePoint = async (id) => {
    await knex('points').where({id}).delete()
}

module.exports = {
    createPoint,
    listPoints,
    findPointById,
    updatePoint,
    deletePoint
}   