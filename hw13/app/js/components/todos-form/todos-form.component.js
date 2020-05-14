import { todosFormTemplate } from "./todos-form.template";
import { TodosService } from "../../services/todos.service";
import { TodosEffects, useEffect } from "../../effects";
import { tryToAddTodo, addTodo } from "../../constants/action";

export class TodosFormComponent {
  constructor() {
    this.host = $('<div class="todos-form"></div>');
    this.store = window.store;
    this.todosService = new TodosService();
    this.todosEffects = new TodosEffects({ service: this.todosService });
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
      useEffect(tryToAddTodo, this.todosEffects, payload);
       //this.store.dispatch({ type: addTodo, payload });
    });
  }

  html() {
    return this.host;
  }
}
