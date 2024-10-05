export class DivComponent {
  constructor() {
    this.el = document.createElement("div")
  }
  render() {
    this.el
  }
}

function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 === 0) {
    return true
  } else {
    return false
  }
}