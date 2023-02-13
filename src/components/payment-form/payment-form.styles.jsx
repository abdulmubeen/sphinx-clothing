import styled from "styled-components";
import Button from "../button/button.component";
import { device } from "../../utils/devices/device";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    height: fit-content;
    width: 100%;
  }
`;
export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    min-width: 100%;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
