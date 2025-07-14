import SearchIcon from '@assets/icons/search-icon.svg?react';
import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1rem 10rem;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 2px 10px 2px #00000010;
`;

export const Logo = styled(Link)``;

export const LogoImg = styled.img`
  display: block;
`;

export const SearchWrap = styled.div`
  position: relative;
  flex: 3;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 50%;
  left: 0.75rem;
  transform: translate(0, -50%);
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 1rem 1rem 1rem 2.5rem;
  border: 0;
  background-color: #f5f5f5;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.5rem;
`;

export const NavWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex: 2;
`;

export const MainNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 3;
`;

export const MainNavItem = styled(NavLink)`
  display: flex;
  font-weight: 500;
  color: #00000030;
  text-decoration: none;
  align-items: center;

  &:hover {
    color: #000;
  }
  &:visited {
    color: #00000030;
  }
  &.active {
    color: #000;
  }
`;

export const IconNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const IconNavItem = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
`;
