import styled from 'styled-components'
import { GlobalStyle } from './styled-components/Global'
import { Home } from './pages/Home/Home'

const AppSyled = styled.div`
  display: flex;
  flex-direction: column;
  
  > * {
    width: 100%;
  }
`

function App() {
  return (
    <AppSyled>
      <GlobalStyle />
      <Home />
    </AppSyled>
  );
}

export default App;
