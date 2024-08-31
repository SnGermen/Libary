export class AbstractiveView {
  constructor() {
    this.app = document.getElementById("root")
  }

  setTitle(title) {
    document.title = title
  }

  render() {
    console.log("Absrtact")
    return
  }

  destroy() {
    return
  }
}