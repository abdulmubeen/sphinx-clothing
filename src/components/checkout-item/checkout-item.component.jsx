import { useContext } from "react";

import { AiFillDelete, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { CartContext } from "../../contexts/cart-context";

import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Arrow,
  Price,
  Value,
  RemoveButton,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const deleteItemHandler = () => deleteItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>
          <AiOutlineLeft />
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          <AiOutlineRight />
        </Arrow>
      </Quantity>
      <Price>${price}</Price>
      <RemoveButton>
        <AiFillDelete onClick={deleteItemHandler} />
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
