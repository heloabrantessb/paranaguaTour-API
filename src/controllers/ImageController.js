const knex = require('../database/knex');
const { createImage, listImages, getImagesByPointId } = require('../services/ImageService');
const BaseController = require('./BaseController');

class ImageController extends BaseController{
    async create(req, res) {
        const {link_image} = req.body
        const {points_id} = req.params

        await createImage(link_image, points_id);
        
        return this.ok(res, "Imagem criada com sucesso");
    }

    async listAll(req, res) {
        const images = await listImages();
        return this.ok(res, images);
    }

    async findByPointId(req, res) {
        const {points_id} = req.params

        const images = await getImagesByPointId(points_id);
        return this.ok(res, images)
    }

    async deleteImages(req, res) {
        const {id} = req.params;
        
        await deleteImage(id);
        return this.ok(res, "Imagem deletada com sucesso");
    }
}

module.exports = ImageController;