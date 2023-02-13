import styled from "styled-components";
import { device } from "../../utils/devices/device";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    width: 100%;
    margin: 5px;
    align-items: flex-start;
  }
`;
export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    width: 100%;
    margin: 5px;
  }
`;
export const HeaderBlock = styled.div`
  text-transform: lowercase;
  width: 23%;
  font-weight: 600;
  font-size: 20px;
  &:last-child {
    width: 8%;
  }
  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    font-size: 15px;
    justify-content: flex-start;
    width: fit-content;

    &:last-child {
      width: 20%;
    }
  }
`;
export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    font-size: 20px;
  }
`;
