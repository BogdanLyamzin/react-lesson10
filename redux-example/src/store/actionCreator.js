import ADD_TO_CART from "./constants";

export const addToCartCreator = (newProduct) => {
  return {
    type: ADD_TO_CART,
    payload: newProduct,
  };
};
