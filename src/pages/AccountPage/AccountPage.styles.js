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
export const Container = styled.div`
  background-color: ${colors.grey};
  padding: 24px;

  ${breakpoint.md`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 25px;

    div:nth-of-type(1){
      grid-column: 1 / 2;
    }
    
    div:nth-of-type(2){
      grid-column: 2 / 2;
    }

    div:nth-of-type(3){
      grid-column: 1 / 3;
    }
  `}
`
