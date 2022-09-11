import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

//actual value
export const ProductContext = createContext({
  products: [],
});

//actual component

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
