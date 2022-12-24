import styled from 'styled-components'
import { calcFontToRem, theme } from './theme'

export const Title = styled.h1`
  font-size: ${props => props.size || calcFontToRem(theme.fonts.sizes.l)};
  color: ${props => props.color || theme.colors.veryDarkBlue};
`;
