import logo from './logo.svg'
import './App.css'
import * as S from './Appstyles'

function App() {
  return (
    <S.App>
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
          Learn React
        </a>
      </header>
    </S.App>
  )
}

export default App
