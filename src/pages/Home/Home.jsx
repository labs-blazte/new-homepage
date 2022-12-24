import React from 'react';
import { Header } from '../../components/Header'
import { Container, theme } from '../../styled-components'
import { TopNews } from './components/TopNews/TopNews'
import styled from 'styled-components'
import { StyledHeroSection } from './components/HeroSection'


const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  
  ${StyledHeroSection} {
    margin-bottom: ${theme.layout.spaces.xl};
  }
  
  
`


export const Home = () => {
  return (
      <HomeContainer>
        <Header/>
        <StyledHeroSection />
        <TopNews />
      </HomeContainer>
  );
};
