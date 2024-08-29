
import { MainView } from './views/main.js'
class App {
  routes = [
    { path: "", view: MainView }
  ]

  constructor() {
    window.addEventListener("hashchange", this.route.bind(this))
    this.route
  }

  route() { // Исправлено: rote -> route
    if (this.currentView) {
      this.currentView.destroy()
    }
    const view = this.routes.find(r => r.path == location.hash).view
    this.currentView = new view()
    this.currentView.render()
  }
}


new App()
console.log('aaaa')
