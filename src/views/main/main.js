import { AbstractiveView } from '../../common/view.js';
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';
export class MainView extends AbstractiveView {
  state = {
    list: [],
    loading: false,
    searchQuery: undefined,
    offset: 0,
  }
  constructor(appState = {}) {
    super()
    this.appState = appState
    this.appState = onChange(this.appState, this.appStateHook.bind(this))
    this.setTitle("Book Search")
  }

  appStateHook(path) {
    console.log(path)
  }

  render() {
    if (this?.appState?.favorites) {
      const main = document.createElement('div');
      this.app.innerHTML = "";
      this.app.append(main);
      this.renderHeader()
      this.appState.favorites.push('i')
    } else {
      console.error('favorites is non defined')
    }

  }
  renderHeader() {
    const header = new Header(this.appState).render()
    this.app.prepend(header)
  }

}