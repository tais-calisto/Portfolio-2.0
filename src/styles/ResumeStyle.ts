import styled from 'styled-components';

export const ResumeStyle = styled.main`
  padding-top: 3rem;
  article {
    margin-left: 3rem;
  }

  div {
    padding-left: 1rem;
    margin: 0 6rem 0 3rem;
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
    text-align: justify;
  }

  aside {
    display: block;
    padding-top: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
    svg {
      margin-right: 1rem;
      width: 2rem;
      height: 2rem;
    }
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

  .experience,
  .education {
    h3 {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.secondary};
    }
    span {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.darkGray};
      border-radius: 5px;
      padding: 0 0.3rem;
      font-size: 0.8rem;
    }
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
