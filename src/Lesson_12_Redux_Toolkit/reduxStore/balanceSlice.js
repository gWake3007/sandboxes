import { createAction } from "@reduxjs/toolkit";

export const actionDeposit = createAction("balance/deposit");
export const actionWithdraw = createAction("balance/withdraw");

//?createAction - під капотом має такий самий коллбек як у прикладі нижче.
// export const actionDeposit = (value) => ({
//   type: "balance/deposit",
//   payload: value,
// });

// export const actionWithdraw = (value) => ({
//   type: "balance/withdraw",
//   payload: value,
// });

export const balanceReducer = (
  state = {
    value: 1000,
    comments: "",
  },
  action
) => {
  switch (action.type) {
    case actionDeposit.type:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case actionWithdraw.type:
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};
