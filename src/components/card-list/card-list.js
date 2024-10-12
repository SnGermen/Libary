import { DivComponent } from '../../common/div-component';
import { Card } from '../card/card';
import "./card-list.css";
export class CardList extends DivComponent {

  constructor(appState, parentState) {
    super()
    this.appState = appState
    this.parentState = parentState

  }

  render() {
    if (this.parentState.loading) {
      this.el.innerHTML = `<div class="card_list__loader">Loading...</div>`
      return this.el
    }

    this.el.classList.add("card_list")
    this.el.innerHTML = `<h1>Books found:${this.parentState.list?.length || 0}</h1>`;
    return this.el
  }
}

