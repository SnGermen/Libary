import "./app.css"
import { MainView } from './views/main/main'
document.addEventListener('DOMContentLoaded', () => {
  class App {
    routes = [
      { path: "", view: MainView }
    ]

    constructor() {
      window.addEventListener("hashchange", this.route.bind(this)) // Исправлено: rote -> route
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

  console.log('aaaa')

  new App()


})