import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../utils/devices/device";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    margin-bottom: 5px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    width: 50px;
    height: 50px;
    padding: 10px;
  }
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media only screen and (${device.mobileS}) and (${device.mobileL}) {
    padding: 5px 10px;
  }
`;
