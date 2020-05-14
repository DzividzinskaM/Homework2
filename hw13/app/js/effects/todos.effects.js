import {gotTodos, addTodo} from "../constants/action"

export class TodosEffects {
  constructor(properties) {
    this.service = properties.service;
    console.log("service");
    console.log(this.service);
  }

  getTodos() {
    this.service.getTodos().then((res) => {
      window.store.dispatch({ type: gotTodos, payload: res });
    });
  }

  addTodo(data){
    this.service.addTodo(data).then((res)=>{
       window.store.dispatch({type: addTodo, payload: res}); 
    });
  }
}
