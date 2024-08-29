import { AbstractiveView } from './common/view.js';

export class MainView extends AbstractiveView {
  constructor() {
    super()
    this.setTitle("Book Search")
  }


  render() {
    let main = document.createElement("div");
    main.innerHTML = "Teast"; // Возможно, вы хотели написать "Test"
    this.app.innerHTML = ""; // Очистка содержимого this.app
    this.app.append(main); // Добавление нового элемента в this.app
    console.log('bbb')
  }
}