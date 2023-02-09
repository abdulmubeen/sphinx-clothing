import { createSlice } from "@reduxjs/toolkit";

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

const initialCartState = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: "cartDetails",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newCartItems = addCartItem(state.cartItems, action.payload);
      return { ...state, cartItems: newCartItems };
    },
    removeItemFromCart(state, action) {
      const newCartItems = removeItemInCart(state.cartItems, action.payload);
      return { ...state, cartItems: newCartItems };
    },
    deleteItemFromCart(state, action) {
      const newCartItems = deleteItemInCart(state.cartItems, action.payload);
      return { ...state, cartItems: newCartItems };
    },
    setIsCartOpen(state, action) {
      return { ...state, isCartOpen: action.payload };
    },
    setCartCount(state, action) {
      return { ...state, cartCount: action.payload };
    },
    setCartTotal(state, action) {
      return { ...state, cartTotal: action.payload };
    },
  },
});

export default cartSlice.reducer;
export const {
  isCartOpen,
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
  setIsCartOpen,
  setCartCount,
  setCartTotal,
} = cartSlice.actions;
