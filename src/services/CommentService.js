const createComment = async (point_id, title, comment, rating, user_id)=> {
    const comment = await knex('comments').insert({
        title,
        comment,
        user_id,
        points_id: point_id,
        rating
    })
    return comment;
}

const listComments = async () => {
    return await knex('comments');
}

const getCommentsByPostId = async (post_id) => {
    return await knex('comments').where('points_id', post_id)
}
const deleteComment = async (comment_id) => {
    return await knex('comments').where('id', comment_id).delete()
}

const updateComment = async (comment_id, title, comment) => {
    return await knex('comments').where('id', comment_id).update({
        title,
        comment
    })
}

module.exports = {
  createComment,
  listComments,
  getCommentsByPostId,
  deleteComment,
  updateComment
}