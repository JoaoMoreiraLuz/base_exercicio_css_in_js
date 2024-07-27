import { ThemeProvider } from 'styled-components'

import EstiloGlobal, { Container } from './styles'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import LightTheme from './themes/light'

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
