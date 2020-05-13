import { todosContainer } from "./todos-container.template";
import { TodosListComponent } from "../todos-list/todos-list.component";
import { TodosFormComponent } from "../todos-form/todos-form.component";
import { TodosService } from "../../services/todos.service";
import { TodosEffects, useEffect } from "../../effects";
import {tryToGetTodos } from ".../../constants/action";

export class TodosContainer {
  constructor() {
    this.host = $('<div class="todos"></div>');
    this.todosService = new TodosService();
    this.todosEffects = new TodosEffects({ service: this.todosService });

    useEffect(tryToGetTodos, this.todosEffects);
    this.render();
  }

  render() {
    this.host.html(todosContainer["todos-container"]());
    this.host.find(".todos__list").html(new TodosListComponent().html());
    this.host.find(".todos__form").html(new TodosFormComponent().html());
  }

  html() {
    return this.host;
  }
}
