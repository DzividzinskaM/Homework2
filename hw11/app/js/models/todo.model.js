import { Model } from "../core/model";

export class TodoModel extends Model {
  constructor(data = {}) {
    const model = {
      id: data.id,
      text: data.text || "",
      done: data.done || false,
    };
    super(model);
  }
}
