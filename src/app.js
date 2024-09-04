
import { MainView } from './views/main/main.js'
class App extends MainView {
  routes = [
    { path: "", view: MainView },
    console.log('aaaaaaa')

  ]

  appState = {
    favorites: []
  }

  constructor() {
    super()
    this.render()
    window.addEventListener("hashchange", this.route.bind(this))
    this.route
  }

  route() {
    if (this.currentView) {
      this.currentView.destroy()
    }
    const view = this.routes.find(r => r.path == location.hash).view
    this.currentView = new view(this.appState)
    this.currentView.render()
    console.log(view)
  }
}

new App()
