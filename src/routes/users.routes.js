const {Router} = require('express')
const UsersControllers = require('../controllers/UsersController')
const checkIsAdmin = require('../middlewares/checkIsAdmin')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const usersRoutes = Router()

const usersControllers = new UsersControllers()

usersRoutes.post('/', usersControllers.create)
usersRoutes.get('/:id', usersControllers.findById)

usersRoutes.use(ensureAuthenticated)

usersRoutes.put('/', usersControllers.update)

usersRoutes.use(checkIsAdmin)

usersRoutes.get('/', usersControllers.list)
usersRoutes.delete('/:id/', usersControllers.delete)

module.exports = usersRoutes


