import express from 'express'
import UserController from './userController.js'

const router = express.Router()

/**
 * UserRoutes class for handling user related routes
 */
class UserRoutes {
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
router.get('/users/', UserRoutes.getUsers)
router.get('/users/:id', UserRoutes.getUser)
router.post('/users/', UserRoutes.createUser)
router.put('/users/:id', UserRoutes.updateUser)
router.delete('/users/:id', UserRoutes.deleteUser)

export default router
