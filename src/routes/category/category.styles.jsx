import styled from "styled-components";
import { device } from "../../utils/devices/device";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
  text-transform: lowercase;
`;
