import logo from './logo.svg'
import './App.css'

import * as S from './styles'
import GlobalStyles from './styles/global'

function App() {
  return (
    <S.Container>
      <GlobalStyles />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn react
        </a>
      </header>
    </S.Container>
  )
}

export default App
