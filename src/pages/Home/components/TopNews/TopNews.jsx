import React from 'react';
import { TopNew } from './TopNew'

import img1 from '../../../../assets/images/image-retro-pcs.jpg'
import img2 from '../../../../assets/images/image-top-laptops.jpg'
import img3 from '../../../../assets/images/image-gaming-growth.jpg'
import styled from 'styled-components'
import { theme } from '../../../../styled-components'

const topNews = [
  {
    id: 1,
    title: 'Reviving Retro Pcs',
    text: 'What happens when old PCs are given modern upgrades?',
    imgPath: img1,
    numberIndex: '01'
  },
  {
    id: 2,
    title: 'Reviving Retro Pcs',
    text: 'What happens when old PCs are given modern upgrades?',
    imgPath: img2,
    numberIndex: '02'
  },
  {
    id: 3,
    title: 'Reviving Retro Pcs',
    text: 'What happens when old PCs are given modern upgrades?',
    imgPath: img3,
    numberIndex: '03'
  }
]

const StyledTopNews = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.spaces.l};
  padding-bottom: ${theme.layout.spaces.xl};
  
  @media ${theme.layout.queries.laptop} {
    flex-direction: row;
    align-items: center;
  }
`

export const TopNews = () => {
  return (
    <StyledTopNews>
      {
        topNews.map(topNew => (
          <TopNew key={topNew.id} title={topNew.title} sourceFile={topNew.imgPath} numberIndex={topNew.numberIndex} text={topNew.text}/>
        ))
      }
    </StyledTopNews>
  );
};
