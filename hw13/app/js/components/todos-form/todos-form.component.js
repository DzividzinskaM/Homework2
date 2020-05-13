import { todosFormTemplate } from "./todos-form.template";

export class TodosFormComponent {
  constructor() {
    this.host = $('<div class="todos-form"></div>');
    this.store = window.store;
    this.render();
    this.handleEvents();
  }

  render() {
    this.host.html(todosFormTemplate());
  }

  handleEvents() {
    const input = this.host.find(".todos-form__input");
    this.host.find(".todos-form__add").click(() => {
      const todoTitle = input.val().trim();
      if (!todoTitle.length) {
        return;
      }
      const payload = {
        title: todoTitle,
      };
      this.store.dispatch({ type: "ADD_TODO", payload });
    });
  }

  html() {
    return this.host;
  }
}
