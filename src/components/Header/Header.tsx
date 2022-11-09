import { HeaderStyle } from './style'

const Header = () => {
  return (
    <HeaderStyle>
      <div className='background-detail'></div>
      <h1>Taís</h1>
      <nav>
        <a href='https://www.linkedin.com/in/taiscalisto/' target={'_blank'}>
          Linkedin
        </a>
        <a href='https://github.com/tais-calisto' target={'_blank'}>
          GitHub
        </a>
      </nav>
    </HeaderStyle>
  )
}

export default Header
