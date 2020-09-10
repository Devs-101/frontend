import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const ButtonStyled = styled.button`
  padding: 8px 25px;
  height: 40px;
  background-color: ${colors.primary};
  color: ${colors.white};
  border-radius: 8px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
  &.delete {
    background-color: ${colors.delete.normal};

    &:hover {
      background-color: ${colors.delete.hover};
    }
  }
`
