import { createClient } from 'redis'

class Redis {
  constructor(host, port) {
    this.host = host
    this.port = port
  }

  async connect() {
    this.client = createClient({
      host: '127.0.0.1',
      port: 6379
    })

    this.redis = await redis.connect()
  }
}

export default Redis
