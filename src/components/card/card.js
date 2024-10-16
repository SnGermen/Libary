import { DivComponent } from '../../common/div-component';
import "./card.css";
export class Card extends DivComponent {
  constructor(appState, cardState) {
    super()
    this.appState = appState
    this.cardState = cardState

  }
  #addToFavorites() {
    this.appState.favorites.push(this.cardState)
  }

  #deleteFromeFavorites() {
    this.appState.favorites = this.appState.favorites.filter(
      b => b.key !== this.cardState.key
    )
  }

  render() {
    this.el.classList.add("card")
    const existsInFavorites = this.appState.favorites.find(
      b => b.key == this.cardState.key
    )
    const coverImage = this.cardState.formats['image/jpeg'] || this.cardState.formats['image/png'] || 'path/to/placeholder.jpg';
    console.log("imagen", coverImage)
    this.el.innerHTML = `

<div class="card__info">
  <div class="card__tag">
    ${this.cardState.subjects ? this.cardState.subjects[0] : "Не задано"}
  </div>
  <div class="card__name">
    ${this.cardState.title}
  </div>
  <div class="card__author">
    ${this.cardState.authors ? this.cardState.authors[0] : "Не задано"}
  </div>

 <div class="card__footer">
  <button class="button__add ${existsInFavorites ? 'button__active' : ''}">
    ${existsInFavorites
        ? '<img src="/static/favorites.png" />'
        : '<img src="/static/favorite-white.png" />'}
  </button>
 </div>
 </div>
 `
    if (existsInFavorites) {
      this.el.querySelector("button").addEventListener("click", this.#deleteFromeFavorites.bind(this))
    } else {
      this.el.querySelector("button").addEventListener("click", this.#addToFavorites.bind(this))

    }

    return this.el
  }

}
