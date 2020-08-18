import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const FormStyled = styled.form`
  width: 400px;
  background-color: ${colors.whiteDark};
  padding: 25px 20px 25px 30px;
  border-radius: 20px;
`
export const FormTitle = styled.h3`
  padding: 0 30px;
  text-align: center;
`
export const FormActionText = styled.p`
  text-align: center;
  font-size: 16px;
  margin-bottom: 1em;
`
export const FormActionLink = styled(FormActionText)`
  margin: 0;
  cursor: pointer;
  text-decoration: underline;
`
export const SubmitSection = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`
