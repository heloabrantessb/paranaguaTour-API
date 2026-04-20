const createImage = async (link_image, points_id) => {
    const image = await knex('images').insert({
            link_image,
            points_id
        });
    
    return image;
}
const listImages = async () => {
    return await knex('images');
}
const getImageById = async (id) => {
    return await knex('images').where({id}).first();
}
const getImagesByPointId = async (points_id) => {
    return await knex('images').where({points_id});
}
const updateImage = async (id, link_image) => {
    return await knex('images').where({id}).update({link_image});
}
const deleteImage = async (id) => {
    return await knex('images').where({id}).delete();
}   

module.exports = {
    createImage,
    listImages,
    getImageById,
    getImagesByPointId,
    updateImage,
    deleteImage
}