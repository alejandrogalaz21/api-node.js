import Band from './band'

export default class Bands {
  constructor() {
    this.bands = [
      new Band('Metallica'),
      new Band('Héroes del Silencio'),
      new Band('Bon Jovi'),
      new Band('Breaking Benjamin')
    ]
  }

  getBands() {
    return this.bands
  }

  addBand(name) {
    const band = new Band(name)
    this.bands.push(band)
    return this.bands
  }

  removeBand(id) {
    this.bands = this.bands.filter(band => band.id !== id)
  }

  renameBand(id, newName) {
    this.bands = this.bands.map(band => {
      if (band.id === id) {
        band.name = newName
      }
      return band
    })
  }

  increaseVotes(id) {
    this.bands = this.bands.map(band => {
      if (band.id === id) {
        band.votes += 1
      }
      return band
    })
  }

  decreaseVotes(id) {
    this.bands = this.bands.map(band => {
      if (band.id === id) {
        band.votes -= 1
      }
      return band
    })
  }
}
