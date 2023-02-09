import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
} from "../../store/slices/cartSlice";

import { AiFillDelete, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

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
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;

  const addItemHandler = () => dispatch(addItemToCart(cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));
  const deleteItemHandler = () => dispatch(deleteItemFromCart(cartItem));

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
