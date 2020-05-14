import {apiSource} from "../constants/action"
export class TodosService {
  constructor() {}

  getTodos() {
    return $.get(apiSource);
  }

  addTodo(data){
    return $.post(apiSource, data);
  }
}
