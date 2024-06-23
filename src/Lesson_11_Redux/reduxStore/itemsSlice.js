export const itemsReducer = (state = { item: "" }, action) => {
  switch (action.type) {
    case "items/new":
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
