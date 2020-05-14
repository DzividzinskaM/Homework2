import { TodosEffects } from "./todos.effects";
import {tryToGetTodos, tryToAddTodo} from "../constants/action"
function useEffect(actionType, todosEffects, data) {
  window.store.dispatch({type: actionType});

  if(actionType == tryToGetTodos){
    if(window.store.getState().todos.isLoading){
      console.log("Loading....");
      setTimeout(()=>{
        todosEffects.getTodos();
      }, 300);
      
    } else{
      console.log("Error");
    } 
  }
  else if(actionType == tryToAddTodo){
    window.store.dispatch({type: actionType});
    if(window.store.getState().todos.isLoading){
      console.log("Adding....");
      todosEffects.addTodo(data);
    } else {
      console.log("error");
    }
  }

}

export { TodosEffects, useEffect };
