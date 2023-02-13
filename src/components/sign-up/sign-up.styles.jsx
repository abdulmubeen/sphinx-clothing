import styled from "styled-components";
import { device } from "../../utils/devices/device";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    width: 100%;
    margin-top: 50px;
  }
`;
export const Title = styled.h2`
  margin: 10px 0;
`;
