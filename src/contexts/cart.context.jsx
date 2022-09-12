import { createContext, useState, useEffect } from "react";
import PRODUCTS from "../shop-data.json";

const addItemToCartHandler = (cartItems, product) => {
  //product existing in cartItems
  if (cartItems.find((item) => item.id === product.id)) {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  //product is new item
  return [...cartItems, { ...product, quantity: 1 }];
};

//actual value
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  clickAddItemToCart: () => {},
  cartItemsCount: 0,
});

//actual component

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const clickAddItemToCart = (product) => {
    setCartItems(addItemToCartHandler(cartItems, product));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    clickAddItemToCart,
    cartItemsCount,
  };

  useEffect(() => {
    const itemsInCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    console.log(itemsInCartCount);
    setCartItemsCount(itemsInCartCount);
  }, [cartItems]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
