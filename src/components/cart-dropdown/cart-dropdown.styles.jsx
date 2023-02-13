import styled from "styled-components";
import { BaseButton } from "../button/button.styles";
import { device } from "../../utils/devices/device";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton} {
    margin-top: auto;
  }

  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    height: 350px;

    ${BaseButton} {
      margin-top: 30px;
    }
  }
`;
export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    height: 240px;
  }
`;
