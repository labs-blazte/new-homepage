import styled from 'styled-components'
import {theme} from './theme'
export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: ${theme.layout.sizes.desktop};
  padding-right: ${theme.layout.spaces.xs};
  padding-left: ${theme.layout.spaces.xs};
  
  @media ${theme.layout.queries.laptop} {
    padding-right: ${theme.layout.spaces.xl};
    padding-left: ${theme.layout.spaces.xl};
  }
`