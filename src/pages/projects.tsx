import Image from 'next/image';
import Navegation from '../components/Navegation/Navegation';
import { ProjectsStyle } from '@src/styles/ProjectsStyle';
import { projects } from '@src/utils/projects';

const Projects = () => {
  return (
    <>
      <Navegation />
      <ProjectsStyle>
        <h2>Projetos</h2>
        <div className='scroller'>
          {projects.map((project) => {
            return (
              <div key={project.id}>
                <article>
                  <h3>{project.name}</h3>
                  {/* <Image
                    src={project.image}
                    alt='Foto de demonstração do projeto'
                  ></Image> */}
                  <p>{project.description}</p>
                  <div className='tecnologies'>
                    <p>Tecnologias utilizadas:</p>
                    <ul>
                      {project.tecnologies.map((tec, index) => {
                        return <li key={index}>{tec}</li>;
                      })}
                    </ul>
                  </div>
                  <div className='links'>
                    <p>Acesse o projeto:</p>
                    <ul>
                      {project.links.map((link) => {
                        return (
                          <li key={link.id}>
                            <a href={link.url}>{link.name}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </ProjectsStyle>
    </>
  );
};

export default Projects;
