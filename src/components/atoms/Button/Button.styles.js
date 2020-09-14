import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const ButtonStyled = styled.button`
  padding: 8px 25px;
  height: 40px;
  color: ${colors.white};
  border-radius: 8px;
  border: none;
  background-color: transparent;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  margin-left: 10px;
  background-color: ${colors.cancel.normal};
  &:focus {
    outline: -webkit-focus-ring-color auto 0px;
  }

  &:hover {
    background-color: ${colors.cancel.hover};
    color: ${colors.white};
  }

  &.delete {
    border-color: ${colors.delete.normal};
    background-color: ${colors.delete.normal};

    &:hover {
      color: ${colors.white};
      background-color: ${colors.delete.hover};
    }
  }

  &.update {
    border-color: ${colors.update.normal};
    background-color: ${colors.update.normal};

    &:hover {
      color: ${colors.white};
      background-color: ${colors.update.hover};
    }
  }

  &.save {
    border-color: ${colors.save.normal};
    background-color: ${colors.save.normal};

    &:hover {
      background-color: ${colors.save.hover};
    }
  }

  &.add {
    border-color: ${colors.add.normal};
    background-color: ${colors.add.normal};

    &:hover {
      background-color: ${colors.add.hover};
    }
  }
`
