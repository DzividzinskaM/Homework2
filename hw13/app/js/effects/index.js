import { TodosEffects } from "./todos.effects";
import {tryToGetTodos} from "../constants/action"
function useEffect(actionType, todosEffects) {
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
}

export { TodosEffects, useEffect };
