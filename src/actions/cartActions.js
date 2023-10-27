export const ADD_TO_CART = "ADD_TO_CART";
export const CHANGE_QUANTITY = "CHANGE_QUANTITY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const changeQuantity = (id, newQuantity) => ({
  type: CHANGE_QUANTITY,
  payload: { id, newQuantity },
});

export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product,
});
