import { ResumeStyle } from '@src/styles/ResumeStyle';
import {
  IconBrandReact,
  IconBrandJavascript,
  IconBrandPython,
  IconBrandGit,
  IconBrandNextjs,
} from '@tabler/icons';
import Navegation from '@src/components/Navegation/Navegation';
import { experience, education } from '@src/utils/resume';

const Resume = () => {
  return (
    <>
      <Navegation />
      <ResumeStyle>
        <article className='about'>
          <h2>Sobre mim</h2>
          <div>
            <p>
              Olá! Me chamo Taís. Sou médica de formação e demorei alguns anos
              para descobrir que tecnologia é minha paixão. Acredito na
              importância de pessoas e organizações com preocupação social e
              ambiental estarem na frente do desenvolvimento tecnológico e quero
              fazer parte desse processo.
            </p>
          </div>
        </article>
        <article className='skills'>
          <h2>Habilidades</h2>
          <div>
            <p>
              Iniciei minha jornada como desenvolvedora front-end, trabalho com
              JavaScript, TypeScript, React e Next. Também tenho conhecimentos
              em Node, Python e banco de dados, como MongoDB e MySQL. Sigo
              aprendendo e me desenvolvendo pessoal e profissionalmente.
            </p>
            <aside>
              <IconBrandGit />
              <IconBrandJavascript />
              <IconBrandPython />
              <IconBrandReact />
              <IconBrandNextjs />
            </aside>
          </div>
        </article>
        <article className='experience'>
          <h2>Experiência</h2>

          {experience.map((ex) => {
            return (
              <div key={ex.id}>
                <h3>{ex.title}</h3>
                <span>{ex.time}</span>
                <p>{ex.description}</p>
              </div>
            );
          })}
        </article>
        <article className='education'>
          <h2>Educação</h2>
          <div>
            <ul>
              {education.map((ed) => {
                return <li key={ed.id}>{ed.title}</li>;
              })}
            </ul>
          </div>
        </article>
      </ResumeStyle>
    </>
  );
};

export default Resume;
