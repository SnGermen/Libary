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



    const cartGrid = document.createElement("div")
    cartGrid.classList.add("card_grid")
    this.el.append(cartGrid)
    for (const card of this.parentState.results) {
      cartGrid.append(new Card(this.appState, card).render())
    }
    return this.el
  }
}

