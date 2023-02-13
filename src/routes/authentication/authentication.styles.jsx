import styled from "styled-components";
import { device } from "../../utils/devices/device";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;

  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    flex-direction: column;
    width: 100%;
    margin: 30px auto;
  }
`;
