import { todosTemplate } from "./todos-list.template";

export class TodosListComponent {
  constructor() {
    this.host = $('<div class="todos-list"></div>');
    this.store = window.store;
    this.render();
    this.handleEvents();
    this.store.subscribe(() => {
      this.render();
    });
  }

  getTodos() {
    return this.store.getState().todos.list;
  }

  handleEvents() {
    this.host.on("click", ".todo__remove", (e) => {
      const id = +$(e.target).attr("data-id");
      this.store.dispatch({ type: "REMOVE_TODO", payload: { id } });
    });
  }

  render() {
    this.host.html(todosTemplate(this.getTodos()));
  }

  html() {
    return this.host;
  }
}
