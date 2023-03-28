import express from 'express'

const router = express.Router()

/**
 * AuthController class for handling user related routes
 */
export class AuthController {
  /**
   * Register a new user
   * @param {express.Request} req - The HTTP request object
   * @param {express.Response} res - The HTTP response object
   */
  static register(req, res) {
    res.send('Get all users')
  }
}

// Map the routes to the controller methods
router.post('/register', AuthController.register)

export default router
