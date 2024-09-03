import { AbstractiveView } from '../../common/view.js';

export class MainView extends AbstractiveView {
  constructor() {
    super()
    this.setTitle("Book Search")
  }

  render() {
    const main = document.createElement('div');
    main.innerHTML = "Тест";
    this.app.innerHTML = "";
    this.app.append(main);

  }
}

