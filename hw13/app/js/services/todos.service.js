export class TodosService {
  constructor() {}

  getTodos() {
    return $.get("https://jsonplaceholder.typicode.com/todos");
  }
}
