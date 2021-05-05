import { initialState } from "./initialState";

import { ADD_TO_CART } from "./constants";

export const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { cart } = prevState;
      const newCart = [...cart, action.payload];
      return { ...prevState, cart: newCart };
    default:
      return prevState;
  }
};
