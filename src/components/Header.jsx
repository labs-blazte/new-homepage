import React from 'react';
import logo from '../assets/images/logo.svg'
import { theme } from '../styled-components'
import styled from 'styled-components'
import { Menu } from './Menu/Menu'

const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${theme.layout.spaces.m};
  padding-bottom: ${theme.layout.spaces.l};
  //margin-bottom: ${theme.layout.spaces.l};
`

export const Header = () => {
  return (
    <MainHeader>
      <img src={logo}
           alt="logo image"/>
      <Menu/>
    </MainHeader>
  );
};
