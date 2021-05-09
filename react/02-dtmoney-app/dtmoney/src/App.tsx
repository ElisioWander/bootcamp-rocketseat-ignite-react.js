import styled from 'styled-components'
import { GlobalStyle } from './styles/global'

const Title = styled.h1`
  color: red;
`

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Title>Hello ReactJs</Title>
    </div>
  );
}