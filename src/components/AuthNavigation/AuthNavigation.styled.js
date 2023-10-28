import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavWrap = styled.div`
  display: flex;
  gap: 50px;
`;

export const NavWrap = styled.nav`
  display: flex;
  gap: 30px;
`;



export const StyledNavLink = styled(NavLink)`
  padding-top: 30px;
  padding-bottom: 30px;
  display: inline-block;
  position: relative;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: -0.18px;
  text-transform: uppercase;
  color: #FFF5EE;

  
  &:hover {
    color: #F4A460;
  }

  &.active {
    color: #F4A460;
  }
`;

