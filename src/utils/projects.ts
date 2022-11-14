import { preview } from 'vite';
import coletanea from '../../public/coletanea.png';

export const projects = [
  {
    id: '1',
    name: 'Coletânea',
    image: coletanea,
    description:
      'Aplicação fullstack para acompanhamento de leituras, com login, autenticação e dashboard.',
    tecnologies: ['React', 'Node', 'MongoDB'],
    links: [
      {
        id: '1',
        name: 'GitHub',
        url: 'https://github.com/tais-calisto/Coletanea',
      },
      { id: '2', name: 'Site', url: 'https://coletanea.netlify.app/' },
    ],
  },
  {
    id: '2',
    name: 'CO2 App',
    image: coletanea,
    description:
      'Aplicação que acessa a API Carbon Interface e permite o cálculo de emissões de carbono por diferentes atividades.',
    tecnologies: ['Next', 'TypeScript'],
    links: [
      {
        id: '1',
        name: 'GitHub',
        url: 'https://github.com/tais-calisto/CO2App',
      },
      { id: '2', name: 'Site', url: 'https://carbon-tais-calisto.vercel.app/' },
    ],
  },
  {
    id: '3',
    name: 'Outer',
    image: coletanea,
    description:
      'Projeto de uma Home Page institucional, desenvolvida como parte de um processo seletivo.',
    tecnologies: ['React', 'TypeScript'],
    links: [
      { id: '1', name: 'GitHub', url: 'https://github.com/tais-calisto/Outer' },
      { id: '2', name: 'Site', url: 'https://outer.netlify.app/' },
    ],
  },
  {
    id: '4',
    name: 'Blog',
    image: coletanea,
    description:
      'Aplicação fullstack, trata-se de um blog com manejo de conteúdo via Hygraph (GrapgCMS)',
    tecnologies: ['React', 'GraphQL'],
    links: [
      {
        id: '1',
        name: 'GitHub',
        url: 'https://github.com/tais-calisto/React-Blog',
      },
    ],
  },
];
