import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import { RiPlantLine } from 'react-icons/ri';

export const Nav = styled.nav`
  position: relative;
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  font-family: 'Caveat Brush', cursive;
  letter-spacing: 2px;
  color: #fff;
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const GreenText = styled.p`
  font-family: 'Caveat Brush', cursive;
  color: greenyellow;
`;

export const NavIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: 20px;
  cursor: pointer;
  color: #fff;

  p {
    font-size: 1rem;
    font-weight: 300;
    margin-right: 10px;
  }
`;

export const Bars = styled(RiPlantLine)`
  font-size: 1.4rem;
  color: greenyellow;
`;