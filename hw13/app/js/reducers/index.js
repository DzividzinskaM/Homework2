import { combineReducers } from "redux";
import { todosReducer } from "./todos.reducer";
import { testReducer } from "./test.reducer";

export const reducers = combineReducers({
  todos: todosReducer,
  test: testReducer,
});
