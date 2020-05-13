import {gotTodos} from "../constants/action"

export class TodosEffects {
  constructor(properties) {
    this.service = properties.service; 
  }

  getTodos() {
    this.service.getTodos().then((res) => {
      window.store.dispatch({ type: gotTodos, payload: res });
    });
  }
}
