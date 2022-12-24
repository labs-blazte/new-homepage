import styled from 'styled-components'
import { theme } from './theme'

export const Button = styled.button`
  background-color: ${props => props.color};
  padding: ${theme.layout.spaces.s} ${theme.layout.spaces.m};
  color: ${theme.colors.offWhite};
  border: none;
  
  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.veryDarkBlue};
  }
`