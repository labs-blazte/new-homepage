import React from 'react';
import styled from 'styled-components'
import heroImage from '../../../assets/images/image-web-3-mobile.jpg'
import heroImageDesktop from '../../../assets/images/image-web-3-desktop.jpg'
import { Button, Text, theme, Title } from '../../../styled-components'
import { NewsList } from './NewsList'
import PropTypes from 'prop-types'


const HeroSection = ({className}) => {
  return (
    <section className={className}>
      <div className="left">
        <div className="image"></div>
        <div className="info">
          <Title>The Bright Future of web 3.0</Title>
          <div className="info__text">
            <Text color={`${theme.colors.grayishBlue}`}
                  size={theme.fonts.sizes.s}>We dive into the next evolution of the web that claims to put the power of
              the platforms back into the hands of the people. But is it really fulfilling its promise? </Text>
            <Button color={theme.colors.secondary}>Read More</Button>
          </div>
        </div>
      </div>
      <div className="right">
        <NewsList/>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string,
}


export const StyledHeroSection = styled(HeroSection)`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.spaces.xl};


  .left {
    display: flex;
    flex-wrap: wrap;
    row-gap: ${theme.layout.spaces.m};
  }

  .info, .info__text {
    display: flex;
    flex-direction: column;
    row-gap: 28px;
  }

  .info__text {
    justify-content: space-between;
    align-items: flex-start;
  }

  .image {
    background-image: url(${heroImage});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    min-height: 300px;
  }

  .left ${Button} {
    letter-spacing: 0.5em;
    font-weight: 700;
    text-transform: uppercase;
  }

  @media ${theme.layout.queries.laptop} {
    flex-direction: row;
    column-gap: ${theme.layout.spaces.s};
    .image {
      background-image: url(${heroImageDesktop});
    }

    .info {
      flex-direction: row;
      column-gap: ${theme.layout.spaces.l};
      ${Title} {
        min-width: 300px;
        font-size: 56px;
        font-weight: 800;
      }
    }
    
    .right {
      min-width: 300px;
    }
  }



`