import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/devices/device";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;
export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
