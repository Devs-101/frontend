import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'

export const ModalTitleContainerStyle = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 20px;
  width: 100%;
  height: 60px;
  align-items: center;

  div {
    display: flex;
    justify-content: space-around;
  }

  h3 {
    font-size: 18px;
  }

  ${breakpoint.md`
    box-shadow: none;
    padding: 0;
    h3 {
      font-size: 24px;
    }
  `}
`
