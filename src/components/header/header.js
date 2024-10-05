import { DivComponent } from '../../common/div-component';
import "./header.css";
export class Header extends DivComponent {
  constructor(appState) {
    super()
    this.appState = appState
  }



  render() {
    this.el.classList.add("header")
    this.el.innerHTML = `
    <div class = "icon">
    <img src="static/logoB.png" alt="logo">
    </div>

    <div class="menu">
    <a href = "#" class="menu__item">
      <img src="static/search.png" alt="search_icon" class="menu_search">
      Book search
      <img src="static/favorites.png" alt="favorites_icon" class="menu_favorites">
    </a>
    <a href = "#" class="menu__item">
      Favorites
      <div class="menu__counter">
        ${this.appState.favorites.length || "Nety"}
      </div>
    </a>

  </div>
`
    return this.el
  }
}

