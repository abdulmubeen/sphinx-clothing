import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCartTotal } from "../../store/slices/cartSlice";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  EmptyMessage,
} from "./checkout.styles.jsx";

const Checkout = () => {
  const dispatch = useDispatch();
  const { cartItems, cartTotal } = useSelector((state) => state.cartDetails);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch(setCartTotal(newCartTotal));
  }, [cartItems, dispatch]);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.length ? (
        cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item} />)
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
      <Total>{`total: $${cartTotal}`}</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
