import Link from 'next/link';
import { links } from '../../utils/navegationLinks';
import { NavStyle } from './style';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Navegation = () => {
  const router = useRouter();
  const path = router.asPath;

  const [url, setUrl] = useState<string>(path);

  useEffect(() => {
    setUrl(path);
    console.log(url);
  }, [path]);
  return (
    <NavStyle>
      {links.map((link) => {
        return (
          <Link
            href={link.link}
            key={link.id}
            className={url === link.link ? 'active' : undefined}
          >
            {link.name}
          </Link>
        );
      })}
    </NavStyle>
  );
};

export default Navegation;
