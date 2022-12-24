import React from 'react';
import PropTypes from 'prop-types'
import { Text, theme, Title } from '../../../../styled-components'
import styled from 'styled-components'

const StyledTopNew = styled.article`
  display: flex;
  column-gap: ${theme.layout.spaces.s};
  img {
    width: 100px;
    object-fit: cover;
  }
  
  ${Title} {
    margin-bottom: ${theme.layout.spaces.xs};
    &:hover {
      cursor: pointer;
      color: ${theme.colors.secondary};
    }
  }
`


export const TopNew = ({sourceFile, text, title, numberIndex}) => {
  return (
    <StyledTopNew>
      <img src={sourceFile}
           alt=""/>
      <div className={'top-new-info'}>
        <Text as="span" size={theme.fonts.sizes.l} color={theme.colors.grayishBlue}>{numberIndex}</Text>
        <Title as="h2" size={theme.fonts.sizes.s}>{title}</Title>
        <Text color={theme.colors.grayishBlue}>{text}</Text>
      </div>
    </StyledTopNew>
  );
};

TopNew.propTypes = {
  sourceFile: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  numberIndex: PropTypes.string
}