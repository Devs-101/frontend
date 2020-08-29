import styled from 'styled-components'
import breakpoint from '../../styles/breakpoints'
import { colors } from '../../styles/colors'

export const HomeStyled = styled.div`
  padding: 24px 0;

  ${breakpoint.md`
    padding: 35px 120px;
  `}
`
export const HomeTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  margin-bottom: 24px;

  h3 {
    font-size: 18px;
  }

  ${breakpoint.md`
    padding: 0;
  `}
`
export const ContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 50px 30px 30px 30px;
  background-color: ${colors.grey};
  max-width: 100%;
  margin: 0 auto;
  ${breakpoint.md`
    grid-template-columns: 1fr 1fr 1fr;
    padding-top: 100px;
    `}
`
