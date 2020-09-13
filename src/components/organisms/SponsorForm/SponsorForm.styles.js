import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'
import formImage from '../../../assets/images/formImage.png'

export const SponsorFormStyled = styled.form`
  div:nth-of-type(1) {
    label {
      width: 200px;
      height: 200px;
      margin: 0 auto 24px;
      background-image: url(${props => props.backgroundImage || formImage});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

      ${breakpoint.md`
          grid-row: 2 / 5;
        `}
    }
    input {
      display: none;
    }
  }

  ${breakpoint.md`
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 60px 60px 40px;
    column-gap: 40px;
    row-gap: 20px;

      
    div:nth-of-type(3){
      grid-column: 2 / 3;
    }

  `}
`
