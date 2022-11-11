import styled from 'styled-components';

export const ResumeStyle = styled.main`
  article {
    border: 2px dotted ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    transition: 0.2s all ease-in-out;
    opacity: 0;
    border: 10px solid ${({ theme }) => theme.colors.primary};
    padding: 1rem;
    &:hover {
      scale: 1.01;
    }
  }
  .show {
    opacity: 1;
  }

  @keyframes appear {
    0% {
      opacity: 0;
      scale: 0.5;
    }
    50% {
      opacity: 0;
      scale: 0.5;
    }
    100% {
      opacity: 1;
      scale: 1;
    }
  }
`;
