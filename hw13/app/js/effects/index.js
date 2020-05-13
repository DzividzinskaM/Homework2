import { TodosEffects } from "./todos.effects";

function useEffect(actionType, todosEffects) {
  window.store.dispatch({type: actionType});

  if(window.store.getState().todos.isLoading){
    console.log("Loading....");
    setTimeout(()=>{
      todosEffects.getTodos();
    }, 300);
    
  } else{
    console.log("Error");
  } 
  
}

export { TodosEffects, useEffect };
