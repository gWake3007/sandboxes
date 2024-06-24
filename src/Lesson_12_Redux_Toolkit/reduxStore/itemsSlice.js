import { createAction, nanoid } from "@reduxjs/toolkit";

export const actionNewItem = createAction("items/new", (value) => {
  return {
    payload: { ...value, createdAt: new Date(), isAdmin: false, id: nanoid() },
  };
});

//?ВАЖЛИВО!!! В такий спосіб додавати ще якісь інші значення до нашого об'єкта. Через коллбек в createAction.
//?Також в toolkit всередені є nanoid.

export const itemsReducer = (state = { item: {} }, action) => {
  switch (action.type) {
    case actionNewItem.type:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
