import Image from 'next/image';
import avatar from '../../public/avatar.svg';
import { PresetationStyle } from '@src/styles/PresentationStyle';
import Link from 'next/link';
import { links } from '@src/utils/navegationLinks';

function App() {
  return (
    <>
      <PresetationStyle>
        <div className='first-animation'>
          <Image src={avatar} alt='Foto de rosto' />
          <p>Olá! Me chamo Taís</p>
        </div>
        <h2 className='second-animation'>
          Crio soluções com <br />
          <span>cuidado e propósito</span>
        </h2>
        <nav>
          {links.map((link) => {
            return (
              <Link href={link.link} key={link.id}>
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className='background-detail'></div>
      </PresetationStyle>
    </>
  );
}

export default App;
