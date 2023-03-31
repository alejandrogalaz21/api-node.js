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
    // error handler middleware
  }

  routes() {
    this.app.use('/api/v1', [router, userRoutes])
    this.app.get('/links', (req, res) => {
      res.sendFile(this.publicDir + '/page')
    })
    this.app.get('/wifi', (req, res) => {
      res.sendFile(this.publicDir + '/qr.html')
    })
    this.app.get('/', (req, res) => {
      res.sendFile(this.publicDir + '/index.html')
    })
    // not found error handler middleware
    this.app.use((req, res, next) => {
      const error = new Error('Not found')
      error.status = 404
      next(error)
    })
    // error handler middleware
    this.app.use((error, req, res, next) => {
      console.log(error)
      if (error.status === 404) {
        return res.sendFile(this.publicDir + '/404.html')
      }

      res.status(error.status || 500).send({
        error: {
          status: error.status || 500,
          message: error.message || 'Internal Server Error'
        }
      })
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
