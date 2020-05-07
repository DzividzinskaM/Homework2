import { Collection } from "../core/collection";
import { TodoModel } from "./todo.model";

export class TodosCollection extends Collection {
  constructor(collection = []) {
    super(TodoModel, collection);
  }
}
