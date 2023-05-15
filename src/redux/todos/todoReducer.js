import {
  ADDED,
  TOGGLED,
  CLEAR_COMPLETED,
  SELECT_COLOR,
  ALL_COMPLETED,
  DELETED,
} from "./actionTypes.js";

const nextTodoId = (todos) => {
  const maxId = todos.reducer((maxId, todo) => Math.max(maxId, todo.id), -1);
  return maxId + 1;
};

const initialState = [
  {
    id: 1,
    text: "Learn to code with CodeFreak",
    completed: true,
    color: "green",
  },
];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [...state, { id: nextTodoId(state), text: action.payload }];
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) return todo;
        else return { ...todo, completed: !todo.completed };
      });
    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);
    case SELECT_COLOR:
      return state.map((todo) => {
        if (todo.id !== action.payload.todoId) return todo;
        else return { ...todo, color: action.payload.color };
      });
    case ALL_COMPLETED:
      return state.map((todo) => [...state, { completed: true }]);
    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      state;
  }
};

export default todoReducer;
