import { AbstractiveView } from '../../common/view.js';
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';
import { Search } from '../../components/search/search.js';
import { CardList } from '../../components/card-list/card-list.js';
export class MainView extends AbstractiveView {
  state = {
    loading: false,
    page: 0,
    search: "",
    results: [],
    count: 0,

  }

  constructor(appState = {}) {
    super()
    this.appState = appState
    this.appState = onChange(this.appState, this.appStateHook.bind(this))
    this.state = onChange(this.state, this.stateHook.bind(this))
    this.setTitle("Book Search")
  }
  destroy() {
    onChange.unsubscribe(this.appState)
    onChange.unsubscribe(this.state)

  }

  appStateHook(path) {
    if (path === "favorites") {
      this.render()
    }
  }
  async stateHook(path) {
    if (path == "searchQuery") {
      this.state.loading = true
      const data = await this.loadList(this.state.searchQuery,)  //this.state.page
      this.state.loading = false
      this.state.results = data?.results || []
      this.state.count = data?.count || "zeero"



    }
    if (path === "results" || path === "loading") {
      this.render()
    }
  }

  async loadList(search) { //Глобальный метод fetch() запускает процесс извлечения ресурса из сети
    try {
      const res = await fetch(`https://gutendex.com/books/?search=${search}`)
      return res.json()


    } catch (error) {
      console.log(error, 'PIZDA')
    }

  }
  render() {
    if (this?.appState?.favorites) {
      const main = document.createElement('div');
      main.innerHTML = `<h1>Books found:${this
        .state
        .results
        .length || 0}</h1>`;
      main.append(new Search(this.state).render())
      main.append(new CardList(this.appState, this.state).render())
      this.app.innerHTML = "";
      this.app.append(main);
      this.renderHeader()
    } else {
      console.error('favorites is non defined')
    }
  }
  renderHeader() {
    const header = new Header(this.appState).render()
    this.app.prepend(header)

  }

}