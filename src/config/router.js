import { Router as expressRouter } from 'express'
const router = new expressRouter()

import { getTextMessageInput, sendMessage } from '../utils/messageHelper'

/**
 * @access    Private
 * @route     GET api/welcome
 * @desc      welcome message.
 * @params    none.
 */
router.get('/welcome', async (req, res) => {
  try {
    const data = getTextMessageInput(process.env.RECIPIENT_WAID, 'Welcome Alex')

    sendMessage(data)
      .then(function (response) {
        console.log({ response })
        res.json({ message: 'check your phone' })
      })
      .catch(function (error) {
        console.log(error)
        console.log(error.response.data)
        res.sendStatus(500)
      })
  } catch (error) {
    console.log(error)
  }
})

export default router
