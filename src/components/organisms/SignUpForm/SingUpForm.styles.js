import styled from 'styled-components'
import { colors } from '../../../styles/colors'
// import breakpoint from '../../../styles/breakpoints'

export const FormStyled = styled.form`
  width: 100%;
  max-width: 400px;
  color: ${colors.primary};
  background-color: rgba(255, 255, 255, 0.9);
  padding: 25px 20px 25px 30px;
  border-radius: 20px;
`
export const FormTitle = styled.h3`
  padding: 0 30px;
  text-align: center;
`
export const FormActionText = styled.p`
  color: ${colors.primary};
  text-align: center;
  font-size: 16px;
  margin-bottom: 1em;
`
export const FormActionLink = styled(FormActionText)`
  color: ${colors.primary};
  margin: 0;
  cursor: pointer;
  text-decoration: underline;
`
export const SubmitSection = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`
