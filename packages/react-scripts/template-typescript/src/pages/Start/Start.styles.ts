import { styled } from '../../theme'
import { keyframes } from '../../theme/StyledComponents'

export const StyledStart = styled.main`
  text-align: center;
`

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const AppHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const AppLink = styled.a`
  color: #61dafb;
`

export const AppLogo = styled.img`
  height: 80px;

  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`
