import { AbstractiveView } from '../../common/view.js';
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';
import { Search } from '../../components/search/search.js';
import { CardList } from '../../components/card-list/card-list.js';


export class MainView extends AbstractiveView {
  state = {
    loading: false,              // Логическое состояние загрузки
    searchQuery: undefined,      // Поисковый запрос от пользователя
    offset: 0,                   // Смещение для пагинации
    search: "",                  // Запрос для поиска книг (аналог "q" в старом API)
    results: [],                 // Список найденных книг (из "results" от Gutendex API)
    count: 0,                    // Общее количество найденных книг (из "count" от Gutendex API)
    favorites: []                // Избранные книги пользователя
  }

  constructor(appState = {}) {
    super()
    this.appState = appState
    this.appState = onChange(this.appState, this.appStateHook.bind(this))
    this.state = onChange(this.state, this.stateHook.bind(this))
    this.setTitle("Book Search")
  }

  appStateHook(path) {
    if (path === "favorites") {
      this.render()
    }
  }

  async stateHook(path) {
    if (path === "searchQuery") {
      this.state.loading = true
      const data = await this.loadList(this.state.searchQuery, this.state.offset)
      this.state.loading = false

      // Обработка результатов из нового API
      this.state.results = data?.results || []
      this.state.count = data?.count || 0

      if (!data?.results?.length) {
        console.warn('No results found')
      }
    }
    if (path === "results" || path === "loading") {
      this.render()
    }
  }

  async loadList(search, offset) {
    try {
      const res = await fetch(`https://gutendex.com/books?search=${search}&offset=${offset}`)

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`)
      }

      return res.json()

    } catch (error) {
      console.log("Error fetching data:", error)
      return { results: [], count: 0 }  // Возвращаем пустые результаты при ошибке
    }

  }

  render() {
    if (this?.appState?.favorites) {
      console.log(this.state)
      const main = document.createElement('div');
      main.append(new Search(this.state).render())
      main.append(new CardList(this.appState, this.state).render())
      this.app.innerHTML = "";
      this.app.append(main);
      this.renderHeader()

    } else {
      console.error('Favorites are not defined')
    }
  }

  renderHeader() {
    const header = new Header(this.appState).render()
    this.app.prepend(header)
  }
}