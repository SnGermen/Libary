(function () {
  'use strict';

  class AbstractiveView {
    constructor() {
      this.app = document.getElementById("root");
    }

    setTitle(title) {
      document.title = title;
    }

    render() {
      console.log("Absrtact");
      return
    }

    destroy() {
      return
    }
  }

  class MainView extends AbstractiveView {
    constructor() {
      super();
      this.setTitle("Book Search");
    }


    render() {
      let main = document.createElement("div");

      main.innerHTML = "Тест"; // Возможно, вы хотели написать "Test"
      this.app.innerHTML = ""; // Очистка содержимого this.app
      this.app.append(main); // Добавление нового элемента в this.app 


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

    route() {
      if (this.currentView) {
        this.currentView.destroy();
      }
      const view = this.routes.find(r => r.path == location.hash).view;
      console.log(view);
      this.currentView = new view();
      this.currentView.render();
    }
  }

  console.log('aaaa');

  new App();

})();
