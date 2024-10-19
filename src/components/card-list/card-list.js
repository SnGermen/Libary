import { DivComponent } from '../../common/div-component';
import "./card-list.css";
import { Card } from '../card/card';
export class CardList extends DivComponent {
  constructor(appState, parentState) {
    super()
    this.appState = appState
    this.parentState = parentState
  }




  render() {

    if (this.parentState.loading) {
      this.el.innerHTML = `<div class="card_list__loader">Loading...</div>`;
      return this.el
    }
    this.el.classList.add("card_list")
    this.el.innerHTML = `<h1>Books found:${this.parentState.results.length || 0}</h1>`;

    for (const card of this.parentState.results) {
      this.el.append(new Card(this.appState, card).render())
    }
    return this.el
  }
}

