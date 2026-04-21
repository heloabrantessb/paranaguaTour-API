const {Router} = require('express')
const ImageController = require('../controllers/ImageController');
const checkIsAdmin = require('../middlewares/checkIsAdmin');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const imagesRoutes = Router()

const imagesControllers = new ImageController()

imagesRoutes.get('/', imagesControllers.listAll);
imagesRoutes.get('/:points_id', imagesControllers.findByPointId);

imagesRoutes.use(ensureAuthenticated)
imagesRoutes.use(checkIsAdmin)

imagesRoutes.post('/:points_id', imagesControllers.create);
imagesRoutes.delete('/:id', imagesControllers.deleteImages);

module.exports = imagesRoutes;



