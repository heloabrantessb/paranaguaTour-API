const {Router} = require('express')
const PointsControllers = require('../controllers/PointsControllers')
const checkIsAdmin = require('../middlewares/checkIsAdmin')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const pointsRoutes = Router()

const pointsControllers = new PointsControllers()

pointsRoutes.get('/', pointsControllers.list);
pointsRoutes.get('/:id', pointsControllers.findById);

pointsRoutes.use(ensureAuthenticated)
pointsRoutes.use(checkIsAdmin)

pointsRoutes.post('/', pointsControllers.create);
pointsRoutes.delete('/:id', pointsControllers.delete);
pointsRoutes.put('/:id', pointsControllers.update);

module.exports = pointsRoutes

