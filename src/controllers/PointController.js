const knex = require('../database/knex')
const BaseController = require('./BaseController')
const {createPoint, listPoints, findPointById, updatePoint, deletePoint} = require('../services/PointService')

class PointController extends BaseController{
    create = async (req, res) => {
        try {
            const {name, description, location, category} = req.body

        await createPoint(name, description, location, category)

            return this.created(res)
        } catch (error) {
            return this.badRequest(res, error.message)
        }
    }

    list = async (req, res) => {
        try {
            const points = await listPoints()
            return this.ok(res, points)
        } catch (error) {
            return this.badRequest(res, error.message)
        }
    }
    findById = async (req, res) => {
        try {
            const {id} = req.params
            const point = await findPointById(id)
            return this.ok(res, point)
        } catch (error) {
            return this.badRequest(res, error.message)
        }
    }
    delete = async (req, res) => {
        try {
            const {id} = req.params;
            await deletePoint(id);  

            return this.ok(res, 'Ponto deletado com sucesso')
        } catch (error) {
            return this.badRequest(res, error.message)
        }   
    }
    update = async (req, res) => {
        try {
            const {id} = req.params
            const {name, description, location, category} = req.body

            await updatePoint(id, name, description, location, category)
            return this.ok(res, 'Ponto atualizado com sucesso')
        } catch (error) {
            return this.badRequest(res, error.message)
        }   
    }
}
module.exports = PointController
