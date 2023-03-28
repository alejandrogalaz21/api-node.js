import express from 'express'

const router = express.Router()

// Map the routes to the controller methods
router.get('/products/', ProductRoutes.getUsers)
router.get('/products/:id', ProductRoutes.getUser)
router.post('/products/', ProductRoutes.createUser)
router.put('/products/:id', ProductRoutes.updateUser)
router.delete('/products/:id', ProductRoutes.deleteUser)

export default router
