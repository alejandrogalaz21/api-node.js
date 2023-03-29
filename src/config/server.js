import path from 'path'
import http from 'http'
import express from 'express'
import socketIo from 'socket.io'
import Sockets from './sockets'
import cors from 'cors'
import morgan from 'morgan'
import router from './router'
import userRoutes from './../modules/users/userRoutes'

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT || 8080
    // Http server
    this.server = http.createServer(this.app)
    // Socket.io Server
    this.io = socketIo(this.server, {})
    // public path
    this.publicDir = path.join(__dirname, './../../public')
  }

  middlewares() {
    // rules
    this.app.set('case sensitive routing', false)
    this.app.set('strict routing', false)
    this.app.set('json spaces', 2)
    this.app.use(morgan('tiny'))
    this.app.use(cors())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
    this.app.use(express.static(this.publicDir))
    this.io.use((socket, next) => {
      console.log('Socket middleware ', socket.id)
      next()
    })
  }

  routes() {
    this.app.use('/api/v1', [router, userRoutes])
    this.app.get('/*', (req, res) => {
      res.sendFile(this.publicDir + '/link.html')
    })
  }

  socketConfig() {
    new Sockets(this.io)
  }

  execute() {
    // Init middleware
    this.middlewares()
    this.routes()
    // Init Socket's
    this.socketConfig()
    this.server.listen(this.port, () => {
      console.info(`listening on * http://localhost:${this.port}`)
    })
  }
}

export default Server
