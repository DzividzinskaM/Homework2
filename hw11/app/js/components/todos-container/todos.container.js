import { TodosListComponent } from "../todos-list/todos-list.component";
import { TodoModel } from "../../models/todo.model";
import { TodosCollection } from "../../models/todos.collection";
import { TodosForm } from "../todos-form/todos.form";

export class TodosContainer {
  constructor() {
    this.host = $("<div class='todos'></div>"); //document.createElement('div');
    this.todosCollection = new TodosCollection();
    this.todosCollection.add({
      text: "Make smth 1",
    });
    this.todosCollection.add({
      text: "Make smth 2",
    });
    this.todosCollection.add({
      text: "Make smth 3",
    });
  }

  renderContainer() {
    this.host.html(window.Templates["todos-container"]());
    this.host.find(".todos__list").html(
      new TodosListComponent({
        todosCollection: this.todosCollection,
      }).render()
    );
    this.host.find(".todos__form").html(new TodosForm().render());
    return this.host;
  }

}
