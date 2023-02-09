import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen, setCartCount } from "../../store/slices/cartSlice";

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { cartItems, cartCount, isCartOpen } = useSelector(
    (state) => state.cartDetails
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const newCartCount = cartItems
      .map((item) => item.quantity)
      .reduce((total, cartItem) => total + cartItem, 0);
    dispatch(setCartCount(newCartCount));
  }, [cartItems, dispatch]);
  // const cartItemsCount = cartItems
  //   .map((item) => item.quantity)
  //   .reduce((acc, currentValue) => acc + currentValue, 0);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
