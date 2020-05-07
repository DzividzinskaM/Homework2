import { TodosListComponent } from "../todos-list/todos-list.component";
import { TodoModel } from "../../models/todo.model";
import { TodosCollection } from "../../models/todos.collection";

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

  render() {
    this.host.html(window.Templates["todos-container"]());
    this.host.find(".todos__list").html(
      new TodosListComponent({
        todosCollection: this.todosCollection,
      }).render()
    );
    return this.host;
  }
}
