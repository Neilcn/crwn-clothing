import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

//actual value
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

//actual component

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
