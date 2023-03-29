import { Router as expressRouter } from 'express'
const router = new expressRouter()

/**
 * @access    Private
 * @route     GET api/welcome
 * @desc      welcome message.
 * @params    none.
 */
router.get('/welcome', async (req, res) => {
  try {
    res.json({
      version: '3.0.0',
      message: 'Hello wold'
    })
  } catch (error) {
    console.log(error)
  }
})

export default router
