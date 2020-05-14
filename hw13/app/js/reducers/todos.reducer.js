// const initialState = [
//   {
//     id: 1,
//     title: "Learn Angular",
//     completed: false,
//   },
// ];

import {tryToGetTodos, gotTodos, tryToAddTodo, addTodo} from "../constants/action";

const initialState = {
  list: [
    {
      id: 1,
      title: "Learn Angular",
      completed: false,
    },
  ],
  isLoading: false,
};

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case tryToGetTodos:
      return {
        ...state,
        isLoading: true,
      };
    case gotTodos:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };
    case tryToAddTodo:
      return{
        ...state, 
        isLoading: true,
      };
    /* case addTodo:
      return {
        ...state, 
        list: [
          ...
          {
            id: state.length ? state[state.length - 1].id + 1 : 1,
            title: action.payload.title,
            completed: false,
          }
        ],
        isLoading: false,
      } */
      case addTodo:
      return {
        ...state,
        list: [
          {
            id: state.length ? state[state.length - 1].id + 1 : 1,
            title: action.payload.title,
            completed: false,
          },
        ],
        isLoading: false,
      };
    // case "ADD_TODO":
    //   return [
    //     ...state,
    //     {
    //       id: state.length ? state[state.length - 1].id + 1 : 1,
    //       title: action.payload.title,
    //       completed: false,
    //     },
    //   ];
    // case "REMOVE_TODO":
    //   return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}

// 1) Вынести в константы названия action'ов (ИЛИ createAction (гуглить)) и apiUrl
// 2) Создать функцию useEffect() которая будет принимать на вход название action'а
// затем будет  dispatch'ить этот action и вызывать соответствующий эффект.
// 3) Реализовать методы TR_TO_ADD_TODO, ADDED_TODO (добавление с использованием API)
