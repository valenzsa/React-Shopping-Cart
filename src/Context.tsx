import { createContext, useContext, useReducer } from "react";
import cartItems from "./data";
import reducer from "./reducer";
import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const initialStateObject = {
  isLoading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialStateObject);

  return (
    <GlobalContext.Provider value={{ ...state }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
