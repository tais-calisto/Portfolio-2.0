import Link from 'next/link';
import { FooterStyle } from './style';
const Footer = () => {
  return (
    <FooterStyle>
      <hr />
      <Link href='/' className='home-link'>
        Taís
      </Link>
      <p>
        Acredito na importância de pessoas e organizações com preocupação social
        e ambiental estarem na frente do desenvolvimento tecnológico e quero
        fazer parte desse processo.
      </p>
      <p className='copy'>© 2022 Taís Calisto</p>
      <div className='background-detail'></div>
    </FooterStyle>
  );
};

export default Footer;
