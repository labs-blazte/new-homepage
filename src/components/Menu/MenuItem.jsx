import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { calcFontToRem, theme } from '../../styled-components'

const ListItem = styled.li`
  color: ${theme.colors.darkGrayishBlue};
  a {
    font-size: ${calcFontToRem(theme.fonts.sizes.s)};
    font-weight: ${theme.fonts.mainFont.weights['400']};
    text-decoration: none;
    color: inherit;
  }
  
  &:hover {
    color: ${theme.colors.secondary};
  }
`

export const MenuItem = ({children}) => {
  return (
    <ListItem>
      <a href="">{children}</a>
    </ListItem>
  );
};

MenuItem.propTypes = {
  children: PropTypes.any
}