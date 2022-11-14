import { ResumeStyle } from '../styles/ResumeStyle';
import Navegation from '../components/Navegation/Navegation';
const Resume = () => {
  return (
    <>
      <Navegation />
      <ResumeStyle>
        <article className='about'>
          <h2>Sobre mim</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            illum saepe molestiae accusantium? Architecto non quidem atque
            deleniti delectus omnis nemo autem magnam aliquid reprehenderit
            earum natus incidunt dignissimos suscipit recusandae cupiditate
            similique temporibus, sapiente nihil aspernatur quia voluptate
            cumque. Nisi corporis dolor nihil id culpa quod nostrum nobis
            quibusdam.
          </p>
        </article>
        <article className='skills'>
          <h2>Habilidades</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            illum saepe molestiae accusantium? Architecto non quidem atque
            deleniti delectus omnis nemo autem magnam aliquid reprehenderit
            earum natus incidunt dignissimos suscipit recusandae cupiditate
            similique temporibus, sapiente nihil aspernatur quia voluptate
            cumque. Nisi corporis dolor nihil id culpa quod nostrum nobis
            quibusdam.
          </p>
        </article>
        <article className='experience'>
          <h2>Experiência</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            illum saepe molestiae accusantium? Architecto non quidem atque
            deleniti delectus omnis nemo autem magnam aliquid reprehenderit
            earum natus incidunt dignissimos suscipit recusandae cupiditate
            similique temporibus, sapiente nihil aspernatur quia voluptate
            cumque. Nisi corporis dolor nihil id culpa quod nostrum nobis
            quibusdam.
          </p>
        </article>
        <article className='education'>
          <h2>Educação</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            illum saepe molestiae accusantium? Architecto non quidem atque
            deleniti delectus omnis nemo autem magnam aliquid reprehenderit
            earum natus incidunt dignissimos suscipit recusandae cupiditate
            similique temporibus, sapiente nihil aspernatur quia voluptate
            cumque. Nisi corporis dolor nihil id culpa quod nostrum nobis
            quibusdam.
          </p>
        </article>
      </ResumeStyle>
    </>
  );
};

export default Resume;
