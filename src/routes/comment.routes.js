const {Router} = require('express');
const CommentController = require('../controllers/CommentController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const commentRoutes = Router()

const commentsControllers = new CommentController()

commentsRoutes.get('/', commentsControllers.listComments);
commentsRoutes.get('/:id', commentsControllers.listCommentsById);

commentsRoutes.use(ensureAuthenticated)

commentsRoutes.post('/:points_id', commentsControllers.create);
commentsRoutes.delete('/:id', commentsControllers.deleteComment); // colocar verificaçao apenas para o usuario ou o adm
commentsRoutes.put('/:id', commentsControllers.updateComment); // colocar verificaçao apenas para o usuario ou o adm

module.exports = commentRoutes


