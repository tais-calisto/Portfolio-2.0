import Image from 'next/image';
import Header from '../components/Header/Header';
import Navegation from '../components/Navegation/Navegation';
import { ProjectsStyle } from '../styles/ProjectsStyle';
import { projects } from '../utils/projects';

const Projects = () => {
  return (
    <>
      <Header />
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
                    {project.tecnologies.map((tec, index) => {
                      return <p key={index}>{tec}</p>;
                    })}
                  </div>
                  <div className='links'>
                    {project.links.map((link) => {
                      return (
                        <a href={link.url} key={link.id}>
                          {link.name}
                        </a>
                      );
                    })}
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
