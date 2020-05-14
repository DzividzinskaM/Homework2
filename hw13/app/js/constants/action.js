import { createAction } from 'redux-actions';

export const apiSource = "https://jsonplaceholder.typicode.com/todos";
export const tryToGetTodos = createAction('TRY_TO_GET_TODOS');
export const gotTodos = createAction('GOT_TODOS');
export const tryToAddTodo = createAction('TRY_TO_ADD_TODO');
export const addTodo = createAction('ADD_TODO');