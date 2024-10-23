import { DivComponent } from "../../common/div-component";
import "./card.css";
export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();
    this.appState = appState;
    this.cardState = cardState;
  }
  #addToFavorites() {
    this.appState.favorites.push(this.cardState);
  }
  #deleteFromeFavorites() {
    this.appState.favorites = this.appState.favorites.filter(
      (b) => b.id !== this.cardState.id
    );
  }

  render() {
    this.el.classList.add("card");

    const existsInFavorites = this.appState.favorites.find(
      (b) => b.id == this.cardState.id
    );

    const coverImage =
      this.cardState.formats["image/jpeg"] ||
      this.cardState.formats["image/png"] ||
      "path/to/placeholder.jpg";

    this.el.innerHTML = `
      <div class="card__image">
        <img src="${coverImage}" alt="Oblozhka">
      </div>
      <div class="card__info">
        <div class="card__tag">
          ${this.cardState.subjects ? this.cardState.subjects[0] : "Не задано"}
        </div>
        <div class="card__name">
          ${this.cardState.title}
        </div>
        <div class="card__author">
          ${this.cardState.authors && this.cardState.authors.length > 0
        ? this.cardState.authors[0].name
        : "Unknown Author"
      }
        </div>
        <div class="card__footer">
          <button class="button__add ${existsInFavorites ? "button__active" : ""
      }" data-test="${this.cardState.id}">
            ${existsInFavorites
        ? '<img src="/static/favorites.png" />'
        : '<img src="/static/favorite-white.png" />'
      }
          </button>
        </div>
    `;

    const button = this.el.querySelector(
      `button[data-test="${this.cardState.id}"]`
    );

    if (existsInFavorites) {
      button.addEventListener("click", this.#deleteFromeFavorites.bind(this));
    } else {
      button.addEventListener("click", this.#addToFavorites.bind(this));
    }

    return this.el;
  }
}
