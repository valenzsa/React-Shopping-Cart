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

type IShoppingCart = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type IShoppingCartContext = [IShoppingCart[], React.Dispatch<IShoppingCart[]>];

const GlobalContext = createContext<IShoppingCartContext>([[], () => []]);

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const initialStateObject = {
  isLoading: false,
  cart: new Map(),
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
