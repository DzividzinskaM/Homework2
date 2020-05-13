import { createAction } from 'redux-actions';

export const tryToGetTodos = createAction('TRY_TO_GET_TODOS');
export const gotTodos = createAction('GOT_TODOS');