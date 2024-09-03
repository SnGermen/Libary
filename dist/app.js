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
      const main = document.createElement('div');
      main.innerHTML = "Тест";
      this.app.innerHTML = "";
      this.app.append(main);

    }
  }

  class App extends MainView {
    routes = [
      { path: "", view: MainView },
      console.log('aaaaaaa')

    ]

    constructor() {
      super();
      this.render();
      window.addEventListener("hashchange", this.route.bind(this));
      this.route;
    }

    route() {
      if (this.currentView) {
        this.currentView.destroy();
      }
      const view = this.routes.find(r => r.path == location.hash).view;
      this.currentView = new view();
      this.currentView.render();
      console.log(view);
    }
  }

  new App();

})();
