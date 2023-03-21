/**
 * UserController class for handling user related routes
 */
class UserController {
  /**
   * Get all users
   * @param {express.Request} req - The HTTP request object
   * @param {express.Response} res - The HTTP response object
   */
  static getUsers(req, res) {
    res.send('Get all users')
  }

  /**
   * Get user by ID
   * @param {express.Request} req - The HTTP request object
   * @param {express.Response} res - The HTTP response object
   */
  static getUser(req, res) {
    const { id } = req.params
    res.send(`Get user with ID ${id}`)
  }

  /**
   * Create a new user
   * @param {express.Request} req - The HTTP request object
   * @param {express.Response} res - The HTTP response object
   */
  static createUser(req, res) {
    const { name, email } = req.body
    res.send(`Create user with name ${name} and email ${email}`)
  }

  /**
   * Update user by ID
   * @param {express.Request} req - The HTTP request object
   * @param {express.Response} res - The HTTP response object
   */
  static updateUser(req, res) {
    const { id } = req.params
    const { name, email } = req.body
    res.send(
      `Update user with ID ${id} to have name ${name} and email ${email}`
    )
  }

  /**
   * Delete user by ID
   * @param {express.Request} req - The HTTP request object
   * @param {express.Response} res - The HTTP response object
   */
  static deleteUser(req, res) {
    const { id } = req.params
    res.send(`Delete user with ID ${id}`)
  }
}

export default UserController
