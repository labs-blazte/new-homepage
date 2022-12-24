import React, { useState } from 'react';
import styled from 'styled-components'
import iconMenu from '../../assets/images/icon-menu.svg'
import iconMenuClose from '../../assets/images/icon-menu-close.svg'
import { theme } from '../../styled-components'
import { MenuItem } from './MenuItem'

const MenuContainer = styled.nav`
  display: flex;

  &.active .wrapper{
    left: 0;
    top: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: hsl(240, 100%, 5%, 0.5);
  }
  
  &.active ul {
    background-color: ${theme.colors.offWhite};
    width: 60%;
    margin-left: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-left: ${theme.layout.spaces.m};
    padding-top: 150px;
  }

  ul {
    display: none;
    gap: ${theme.layout.spaces.l};
    @media  ${theme.layout.queries.laptop}{
      display: flex;
    }
  }
`

const MenuIcon = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }

  @media ${theme.layout.queries.laptop} {
    display: none;
  }
`


export const Menu = () => {
  const [active, setActive] = useState(false)
  const handleMenuActive = (event) => {
    console.log(active, event)
    setActive(!active)
  }
  return (
    <MenuContainer className={active ? 'active' : ''}>
      <div className="wrapper">
        <ul className={active ? 'active' : ''}>
          <MenuItem>Home</MenuItem>
          <MenuItem>New</MenuItem>
          <MenuItem>Popular</MenuItem>
          <MenuItem>Trending</MenuItem>
          <MenuItem>Categories</MenuItem>
        </ul>
      </div>
      <MenuIcon onClick={handleMenuActive}>
        <img src={active ? iconMenuClose : iconMenu}
             alt="hamburger icon menu"/>
      </MenuIcon>
    </MenuContainer>
  );
};
