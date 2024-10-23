import { AbstractiveView } from '../../common/view.js';
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';
import { CardList } from '../../components/card-list/card-list.js';
export class FavoritesView extends AbstractiveView {
  //Все состояние лежит в app.js

  constructor(appState = {}) {
    super()
    this.appState = appState
    this.appState = onChange(this.appState, this.appStateHook.bind(this))
    this.setTitle("Favorites")
  }
  destroy() {
    onChange.unsubscribe(this.appState)

  }

  appStateHook(path) {
    if (path === "favorites") {
      this.render()
    }
  }



  render() {
    if (this?.appState?.favorites) {
      const main = document.createElement('div');
      main.innerHTML = '<h1>Books favorites';
      main.append(new CardList(this.appState, { list: this.appState.favorites }).render())
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