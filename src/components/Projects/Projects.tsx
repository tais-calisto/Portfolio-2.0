import { ProjectsStyle } from './style';

const Projects = () => {
  return (
    <ProjectsStyle>
      <h2>Projetos</h2>
      <div className='scroller'>
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
        <div>item 4</div>
        <div>item 5</div>
        <div>item 6</div>
        <div>item 7</div>
      </div>
    </ProjectsStyle>
  );
};

export default Projects;
