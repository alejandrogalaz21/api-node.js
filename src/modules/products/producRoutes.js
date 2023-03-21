import express from 'express'
import UserController from './userController.js'

const router = express.Router()

/**
 * ProductRoutes class for handling user related routes
 */
class ProductRoutes {
  /**
   * Get all users
   * @param {express.Request} req - The HTTP request object
   * @param {express.Response} res - The HTTP response object
   */
  static getUsers(req, res) {
    UserController.getUsers(req, res)
  }

  /**
   * Get user by ID
   * @param {express.Request} req - The HTTP request object
   * @param {express.Response} res - The HTTP response object
   */
  static getUser(req, res) {
    UserController.getUser(req, res)
  }

  /**
   * Create a new user
   * @param {express.Request} req - The HTTP request object
   * @param {express.Response} res - The HTTP response object
   */
  static createUser(req, res) {
    UserController.createUser(req, res)
  }

  /**
   * Update user by ID
   * @param {express.Request} req - The HTTP request object
   * @param {express.Response} res - The HTTP response object
   */
  static updateUser(req, res) {
    UserController.updateUser(req, res)
  }

  /**
   * Delete user by ID
   * @param {express.Request} req - The HTTP request object
   * @param {express.Response} res - The HTTP response object
   */
  static deleteUser(req, res) {
    UserController.deleteUser(req, res)
  }
}

// Map the routes to the controller methods
router.get('/products/', ProductRoutes.getUsers)
router.get('/products/:id', ProductRoutes.getUser)
router.post('/products/', ProductRoutes.createUser)
router.put('/products/:id', ProductRoutes.updateUser)
router.delete('/products/:id', ProductRoutes.deleteUser)

export default router
