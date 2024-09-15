import { DivComponent } from '../../common/div-component';
import "./search.css";
export class Search extends DivComponent {
  constructor(state) {
    super()
    this.state = state
  }

  render() {
    this.el.classList.add("search")
    this.el.innerHTML = `
  <div class="search__wrapper">
    <input type="text"
     placeholder="Find book or author..."
     class="search__input"
     value= ${this.state.searchQuery ? this.state.searchQuery : ""}>
    <img src="static/search.png" alt="loop icon">
  </div>    
  <button aria-label='looking for'><img src="static/searcherWhite.png" alt="loop icon"></button>
`
    return this.el
  }
}

