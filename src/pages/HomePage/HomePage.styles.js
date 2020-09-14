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
export const Main = styled.main`
  background-color: ${colors.grey};
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 40px 24px;
`
