import styled from 'styled-components'
import breakpoint from '../../../styles/breakpoints'
import { colors } from '../../../styles/colors'

export const ModalFormContainerStyle = styled.div`
  width: 90%;
  background: ${colors.white};
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-radius: 10px;

  ${breakpoint.md`
    width: 769px;
    heigth: 413px;
    padding: 40px;
  `}
`
