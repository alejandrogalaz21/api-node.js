import axios from 'axios'

const sendMessage = data => {
  const config = {
    method: 'post',
    url: `https://graph.facebook.com/${process.env.VERSION}/${process.env.PHONE_NUMBER_ID}/messages`,
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    },
    data: data
  }

  return axios(config)
}

const getTextMessageInput = (recipient, text) => {
  return JSON.stringify({
    messaging_product: 'whatsapp',
    preview_url: false,
    recipient_type: 'individual',
    to: '528134560078',
    type: 'text',
    text: {
      body: text
    }
  })
}

export { sendMessage, getTextMessageInput }
