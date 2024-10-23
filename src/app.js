
import { MainView } from './views/main/main.js'
import { FavoritesView } from './views/favorites/favorites.js'
class App extends MainView {
  routes = [
    { path: "", view: MainView },
    { path: "#favorites", view: FavoritesView },



  ]

  appState = {
    favorites: []
  }

  constructor() {
    super()
    this.render()
    window.addEventListener("hashchange", this.route.bind(this))
    this.route()
  }

  route() {
    if (this.currentView) {
      this.currentView.destroy()
    }
    const view = this.routes.find(r => r.path == location.hash).view
    this.currentView = new view(this.appState)
    this.currentView.render()
  }
}

new App()
