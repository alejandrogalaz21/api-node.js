import { v4 as uuid } from 'uuid'
class Band {
  constructor(name) {
    this.id = uuid()
    this.name = name
    this.votes = 0
  }
}

export default Band
