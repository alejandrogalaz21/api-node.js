import Bands from '../modules/bands'
export default class Sockets {
  constructor(io) {
    this.io = io
    this.bands = new Bands()
    this.socketEvents()
  }

  socketEvents() {
    // On connection
    this.io.on('connection', socket => {
      console.log('Client connected :', socket.id)

      // Emit to the client, all the current bands
      socket.emit('current-bands', this.bands.getBands())

      // Add a band
      socket.on('add-band', name => {
        this.bands.addBand(name)
        // Emit to all the client's, the current changes
        this.io.emit('current-bands', this.bands.getBands())
      })

      // Delete a band
      socket.on('remove-band', id => {
        this.bands.removeBand(id)
        // Emit to all the client's, the current changes
        this.io.emit('current-bands', this.bands.getBands())
      })

      // Rename a band
      socket.on('rename-band', ({ id, name }) => {
        this.bands.renameBand(id, name)
        // Emit to all the client's, the current changes
        this.io.emit('current-bands', this.bands.getBands())
      })

      // Increase a Vote for a band
      socket.on('increase-vote', id => {
        console.log('increase-vote', id)
        this.bands.increaseVotes(id)
        // emit to all the client's, the new band vote's
        this.io.emit('current-bands', this.bands.getBands())
      })

      // Decrease a Vote for a band
      socket.on('decrease-vote', id => {
        console.log('decrease-vote', id)
        this.bands.decreaseVotes(id)
        // emit to all the client's, the new band vote's
        this.io.emit('current-bands', this.bands.getBands())
      })

      socket.on('disconnect', data => {
        console.log('client disconnect :', socket.id)
        console.log(data)
      })
    })
  }
}
