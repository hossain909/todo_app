import {
  ADDED,
  TOGGLED,
  CLEAR_COMPLETED,
  SELECT_COLOR,
  ALL_COMPLETED,
} from "./actionTypes.js";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};
export const deleted = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};
export const selectColor = (color, todoId) => {
  return {
    type: SELECT_COLOR,
    payload: {
      color,
      todoId,
    },
  };
};
export const allCompleted = () => {
  return {
    type: ALL_COMPLETED,
  };
};
export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
  };
};
