import Link from 'next/link';
import { HeaderStyle } from './style';

const Header = () => {
  return (
    <HeaderStyle>
      <div className='background-detail'></div>
      <Link href='/' className='home-link'>
        Taís
      </Link>
      <nav>
        <a
          href='https://www.linkedin.com/in/taiscalisto/'
          target={'_blank'}
          rel={'noreferrer'}
        >
          Linkedin
        </a>
        <a
          href='https://github.com/tais-calisto'
          target={'_blank'}
          rel={'noreferrer'}
        >
          GitHub
        </a>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
