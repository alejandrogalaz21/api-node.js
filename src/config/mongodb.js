import mongoose from 'mongoose'

export function mongodbOptions(user = null, password = null) {
  return {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    ...(user &&
      password && {
        user: user,
        pass: password,
        authSource: 'admin'
      })
  }
}

export function mongodbConnection(host, db, user = null, password = null) {
  const url = `mongodb://${host}/${db}`
  const options = mongodbOptions(user, password)
  mongoose.connect(url, options)
  // CONNECTION EVENTS
  // When successfully connected
  mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + url)
  })

  // If the connection throws an error
  mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err)
  })

  // When the connection is disconnected
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected')
  })

  // If the Node process ends, close the Mongoose connection
  // eslint-disable-next-line no-undef
  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      console.log(
        'Mongoose default connection disconnected through app termination'
      )
      // eslint-disable-next-line no-undef
      process.exit(0)
    })
  })
  return mongoose
}
