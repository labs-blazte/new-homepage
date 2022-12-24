import styled from 'styled-components'
import { calcFontToRem } from './theme'

export const Text = styled.p`
  color: ${props => props.color};
  font-size: ${props => calcFontToRem(props.size)};
  line-height: 1.7;
`