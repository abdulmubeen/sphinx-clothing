import { createContext, useEffect, useReducer } from "react";

const findItemInCart = (cartItems, itemToFind) => {
  return cartItems.find((cartItem) => cartItem.id === itemToFind.id);
};

const deleteItemInCart = (cartItems, itemToDelete) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id);
};

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = findItemInCart(cartItems, productToAdd);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItemInCart = (cartItems, itemToRemove) => {
  const existingCartItem = findItemInCart(cartItems, itemToRemove);
  if (existingCartItem.quantity === 1) {
    return deleteItemInCart(cartItems, itemToRemove);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  cartCount: 0,
  totalPrice: 0,
});

export const USER_ACTION_TYPES = {
  CART_OPEN: "SET_IS_CART_OPEN",
  CART_ITEMS: "SET_CART_ITEMS",
  CART_COUNT: "SET_CART_COUNT",
  CART_TOTAL: "SET_CART_TOTAL",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case USER_ACTION_TYPES.CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case USER_ACTION_TYPES.CART_COUNT:
      return {
        ...state,
        cartCount: payload,
      };
    case USER_ACTION_TYPES.CART_TOTAL:
      return {
        ...state,
        totalPrice: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};
const INITIAL_STATE = {
  cartItems: [],
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen }, cartOpenDispatch] = useReducer(cartReducer, false);
  const [{ cartItems }, cartItemsDispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );
  const [{ cartCount }, cartCountDispatch] = useReducer(cartReducer, 0);
  const [{ totalPrice }, cartTotalDispatch] = useReducer(cartReducer, 0);

  const setIsCartOpen = (cartState) => {
    cartOpenDispatch({ type: USER_ACTION_TYPES.CART_OPEN, payload: cartState });
  };
  const setCartItems = (cartItems) => {
    cartItemsDispatch({
      type: USER_ACTION_TYPES.CART_ITEMS,
      payload: cartItems,
    });
  };
  const setCartCount = (cartCount) => {
    cartCountDispatch({
      type: USER_ACTION_TYPES.CART_COUNT,
      payload: cartCount,
    });
  };
  const setTotalPrice = (totalPrice) => {
    cartTotalDispatch({
      type: USER_ACTION_TYPES.CART_TOTAL,
      payload: totalPrice,
    });
  };

  useEffect(() => {
    const newCartCount = cartItems
      .map((item) => item.quantity)
      .reduce((total, cartItem) => total + cartItem, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setTotalPrice(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeItemInCart(cartItems, productToRemove));
  };

  const deleteItemFromCart = (productToDelete) => {
    setCartItems(deleteItemInCart(cartItems, productToDelete));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    deleteItemFromCart,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
