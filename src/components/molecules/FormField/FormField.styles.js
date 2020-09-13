import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const LabelStyled = styled.label`
  font-size: 16px;
  display: block;
  padding-left: 20px;
  margin-bottom: 5px;
  margin-top: 15px;
`

export const InputStyled = styled.input`
  background-color: ${colors.white};
  height: 40px;
  border-radius: 10px;
  border: none;
  width: 100%;
  padding: 0 10px;
`

export const TextAreaStyled = styled.textarea`
  background-color: ${colors.white};
  height: 112px;
  border-radius: 10px;
  border: none;
  width: 100%;
  padding: 18px 20px 10px;
  resize: none;
`

export const SelectStyled = styled.select`
  background-color: ${colors.white};
  height: 40px;
  border-radius: 10px;
  border: none;
  width: 100%;
  padding: 0 10px;

  option {
    padding: 0 10px;
    height: 40px;
    border: none;
  }
`

export const ChecboxContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-column-gap: 20px;
  justify-content: center;
`
