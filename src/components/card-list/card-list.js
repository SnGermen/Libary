import { DivComponent } from '../../common/div-component';
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
    this.el.innerHTML = `<h1>Books found:${this.parentState.results.length || 0}</h1>`;
    console.log(this.parentState, "render")




    return this.el
  }
}

