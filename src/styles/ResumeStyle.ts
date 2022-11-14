import styled from 'styled-components';

export const ResumeStyle = styled.main`
  padding-top: 3rem;
  article {
    margin-left: 3rem;
  }

  p {
    padding-left: 1rem;
    margin: 0 6rem 0 3rem;
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
    text-align: justify;
  }

  .about {
    animation: show 0.4s linear;
  }
  .skills {
    animation: show 0.8s linear;
  }
  .experience {
    animation: show 1.2s linear;
  }
  .education {
    animation: show 1.6s linear;
  }

  @keyframes show {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }
    50% {
      opacity: 0.5;
      transform: translateX(50px);
    }
    100% {
      opacity: 1;
    }
  }
`;
