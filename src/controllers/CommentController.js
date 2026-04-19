const knex = require('../database/knex')
const { createComment, listComments, getCommentsByPostId, deleteComment } = require('../services/CommentService')
const updateRating = require('../utils/updateRating')

class CommentsControllers {
    create = async (req, res) => {
    const {title, comment, rating} = req.body
    const {points_id} = req.params
    const {id} = req.user
    
    await createComment(points_id, title, comment, rating, id)

    const averageRating = await updateRating(points_id)

    await knex("points").where({id: points_id}).update({
        mediaRating: averageRating
    });
    
    return this.ok(res, 'Comentário criado com sucesso')
    }

    list = async (req, res) => {
        const comments = await listComments 
        return this.ok(res, comments)
    }

    getByPostId = async (req, res) => {
        const {id} = req.params
        const comments = await this.getCommentsByPostId(id)
        return this.ok(res, comments)
    }

    delete = async (req, res) => {
        const {id} = req.params;

        await deleteComment(id)

        return this.ok(res, 'Comentário deletado com sucesso')
    }
    update = async (req, res) => {
        const {id} = req.params;
        const {title, comment} = req.body;

        await updateComment(id, title, comment)
        return this.ok(res, 'Comentário atualizado com sucesso')
    }
}

module.exports = CommentsControllers