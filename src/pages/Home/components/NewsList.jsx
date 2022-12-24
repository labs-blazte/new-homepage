import React from 'react';
import { Text, theme, Title } from '../../../styled-components'
import styled from 'styled-components'

export const StyledNewList = styled.article`
  padding: ${theme.layout.spaces.m} ${theme.layout.spaces.s};
  background-color: ${theme.colors.veryDarkBlue};
  
  h2 {
    margin-bottom: ${theme.layout.spaces.l};
  }
  
  h3 {
    margin-bottom: ${theme.layout.spaces.s};
  }
  
  ${Text} {
    margin-bottom: ${theme.layout.spaces.l};
  }
  
  .new {
    border-bottom: 1px solid ${theme.colors.grayishBlue};
    margin-bottom: ${theme.layout.spaces.l};
  }
  
  .new:nth-last-child(1) {
    border-bottom: none;
    margin-bottom: 0;
    
    ${Text} {
      margin-bottom: 0;
    }
  }
`

export const NewsList = () => {
  return (
    <StyledNewList>
      <Title as="h2" size={theme.fonts.sizes.m} color={theme.colors.primary}>News</Title>
      <div className="new">
        <Title as="h3" color={theme.colors.offWhite} size={theme.fonts.sizes.s}>Hydregon VS Electric Cars</Title>
        <Text color={theme.colors.grayishBlue}>Will hydrogen-fueled cars ever catch up to EVs</Text>
      </div>
      <div className="new">
        <Title as="h3" color={theme.colors.offWhite} size={theme.fonts.sizes.s}>Hydregon VS Electric Cars</Title>
        <Text color={theme.colors.grayishBlue}>Will hydrogen-fueled cars ever catch up to EVs</Text>
      </div>
      <div className="new">
        <Title as="h3" color={theme.colors.offWhite} size={theme.fonts.sizes.s}>Hydregon VS Electric Cars</Title>
        <Text color={theme.colors.grayishBlue}>Will hydrogen-fueled cars ever catch up to EVs</Text>
      </div>
    </StyledNewList>
  );
};
