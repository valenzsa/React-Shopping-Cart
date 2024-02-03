import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }

  if (action.type === REMOVE_ITEM) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }

  if (action.type === INCREASE_QUANTITY) {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.payload.id);
    newCart.set(action.payload.id, { ...item, quantity: item.quantity + 1 });
    return { ...state, cart: newCart };
  }

  if (action.type === DECREASE_QUANTITY) {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.payload.id);
    if (item.quantity === 1) {
      newCart.delete(action.payload.id);
      return { ...state, cart: newCart };
    }
    newCart.set(action.payload.id, { ...item, quantity: item.quantity - 1 });
    return { ...state, cart: newCart };
  }
  throw new Error(`No matching action.type: ${action.type}`);
};

export default reducer;
