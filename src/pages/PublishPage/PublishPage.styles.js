import styled from 'styled-components'
import { colors } from '../../styles/colors'

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
  background-color: ${colors.grey};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  align-items: center;

  ul {
    display: flex;
    list-style: none;

    li {
      font-size: 18px;
      margin-left: 10px;
      padding: none;
      cursor: pointer;

      &.active {
        text-decoration: underline;
      }

      :hover {
        text-decoration: underline;
      }
    }
  }
`
