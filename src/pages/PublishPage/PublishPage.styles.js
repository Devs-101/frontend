import styled from 'styled-components'
// import { colors } from '../../styles/colors'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 60%;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  h1 {
    margin-bottom: 20px;
  }
`

export const IframeContainer = styled.div`
  width: ${props => props.width || 'auto'};
  margin: 0 auto;
`

export const Toolbar = styled.div`
  display: grid;
  grid-template-columns: 40% 40% 20%;
  justify-content: center;

  ul {
    display: flex;
    list-style: none;

    li {
      margin-left: 10px;
      padding: none;
      cursor: pointer;

      &.active {
        background: #cccccc;
      }

      :hover {
        background-color: #000;
        color: #fff;
      }
    }
  }
`
