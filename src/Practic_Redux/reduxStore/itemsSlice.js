import { createAction, createReducer, nanoid } from "@reduxjs/toolkit";

export const actionNewItem = createAction("items/new", (value) => {
  return {
    payload: { ...value, createdAt: new Date(), isAdmin: false, id: nanoid() },
  };
});

export const actionRemoveItem = createAction("items/remove");

//?ВАЖЛИВО!!! В такий спосіб додавати ще якісь інші значення до нашого об'єкта. Через коллбек в createAction.
//?Також в toolkit всередені є nanoid.
//?createAction - ЦЕЙ СПОСІБ НА ДАННИЙ МОМЕНТ ВЖЕ ЗАСТАРІЛИЙ!!!ВАЖЛИВО!!!Але час від часу використовується.

const initialState = { item: {} };

export const itemsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionNewItem.type, (state, action) => {
      return {
        ...state,
        items: action.payload,
      };
    })
    .addCase(actionRemoveItem.type, (state, action) => {
      return {
        ...state,
        items: action.payload,
      };
    });
});

//?createReducer - В цьому способі default case - пішов під капот (тобто спрощення коду).
//?І так в кінці addCase() можна додавати стільки завгодно.

// export const itemsReducer = (state = { item: {} }, action) => {
//   switch (action.type) {
//     case actionNewItem.type:
//       return {
//         ...state,
//         items: action.payload,
//       };
//     default:
//       return state;
//   }
// };
