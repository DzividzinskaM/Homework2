import { Observable } from "../../core/observable";

export class TodosModel extends Observable {
  constructor() {
    super();
    this.todos = [];
    this._defaultTodo = {
      text: "",
      done: false,
    };
  }

  add(todo) {
    let data = {
      id: this.getNewTodoId(),
      ...this._defaultTodo,
      ...todo,
    };
    this.todos.push(data);
    this.notify(this.todos);
  }

  remove(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.notify(this.todos);
  }

  get() {
    return this.todos;
  }

  getTodo(id) {
    return this.todos.find((todo) => todo.id === id);
  }

  getNewTodoId() {
    const lastId = this.todos.length ? this.todos[this.todos.length - 1].id : 0;
    return lastId + 1;
  }

  getFilteredBySearch(text) {
    return this.todos.filter((todo) => todo.text.search(text) !== -1);
  }
}
