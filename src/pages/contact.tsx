import { useState } from 'react';
import Navegation from '@src/components/Navegation/Navegation';
import { ContactStyle } from '@src/styles/ContactStyle';
import Footer from '@src/components/Footer';

const Contact = () => {
  const email = 'taiscalisto97@gmail.com';

  const [showMessage, setShowMessage] = useState<string>(email);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
  };

  const showCopytoClipboard = () => {
    setShowMessage('Copiar para área de transferência');
  };
  const showEmail = () => {
    setShowMessage(email);
  };
  return (
    <>
      <Navegation />
      <ContactStyle>
        <h2>Contato</h2>
        <div>
          <p>
            Busco oportunidades para contribuir e trabalhar em equipe,
            resolvendo problemas de forma otimizada, com conhecimento e
            respeito. Me encanto por projetos sociais, educacionais,
            sustentáveis, e por aí vai. Se fizer sentido para você, por favor
            entre em contato, será muito legal conversar sobre seu projeto!
          </p>
          <ul>
            <legend>Links para minhas redes:</legend>
            <li
              onClick={copyToClipboard}
              onMouseOver={showCopytoClipboard}
              onMouseLeave={showEmail}
            >
              {showMessage}
            </li>
            <li>
              <a
                className='contact-link'
                href='https://github.com/tais-calisto'
                target={'_blank'}
                rel={'noreferrer'}
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className='contact-link'
                href='https://www.linkedin.com/in/taiscalisto/'
                target={'_blank'}
                rel={'noreferrer'}
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </ContactStyle>
      <Footer />
    </>
  );
};

export default Contact;
