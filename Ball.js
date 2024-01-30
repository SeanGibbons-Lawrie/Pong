const INITIAL_VELOCITY = 0.025

export default class Ball {
  constructor(ballElem) {
    this.ballElem = ballElem
    this.reset()
  }

  get x() {
    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue('--x'))
  }

  set x(value) {
    this.ballElem.style.setProperty('--x', value)
  }

  get y() {
    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue('--y'))
  }

  set y(value) {
    this.ballElem.style.setProperty('--y', value)
  }

  reset() {
    this.x = 50
    this.y = 50
    this.direction = { x: 0 }
    while (
      Math.abs(this.direction.x) <= 0.2 ||
      Math.abs(this.direction.x) >= 0.9
    ) {
      const heading = randomNumberBetween(0, 2 * Math.PI) //random number between 0-360 in radions || 2Pi is the equivalent of 360deg
      this.direction = { x: Math.cos(heading), y: Math.sin(heading) } //converts the direction into a x and y position, this will be a unit vector for those positions
    }
    console.log(this.direction)
    this.velocity = INITIAL_VELOCITY
  }

  update(delta) {
    //position, velocity, direction
    this.x += this.direction.x * this.velocity * delta
    this.y += this.direction.y * this.velocity * delta
  }
}

function randomNumberBetween(min, max) {
  return Math.random() * (max - min) + min
}
