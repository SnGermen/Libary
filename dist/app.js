(function () {
  'use strict';

  class MainView extends AbstractiveView {
    constructor() {
      super();
      this.setTitle("Book Search");
    }


    render() {
      let main = document.createElement("div");
      main.innerHTML = "Teast"; // Возможно, вы хотели написать "Test"
      this.app.innerHTML = ""; // Очистка содержимого this.app
      this.app.append(main); // Добавление нового элемента в this.app
      console.log('bbb');
    }
  }

  class App {
    routes = [
      { path: "", view: MainView }
    ]

    constructor() {
      window.addEventListener("hashchange", this.route.bind(this));
      this.route;
    }

    route() { // Исправлено: rote -> route
      if (this.currentView) {
        this.currentView.destroy();
      }
      console.log('1');

      const view = this.routes.find(r => r.path == location.hash).view;
      this.currentView = new view();
      this.currentView.render();
    }
  }

  console.log('aaaa');

  new App();

})();
