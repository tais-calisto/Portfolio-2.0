import styled from 'styled-components';

export const PresetationStyle = styled.main`
  text-align: center;
  h2 {
    color: ${({ theme }) => theme.colors.white};
  }
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
  /* .background-detail {
    position: absolute;
    width: 50vw;
    height: 50vh;
    right: -25vw;
    top: 50%;
    border-radius: 50%;
    background: rgba(147, 161, 153, 0.2);
    filter: blur(58.386px);
  } */
  .first-animation {
    animation: appear 0.8s ease;
  }
  .second-animation {
    animation: appear 1s ease;
  }

  nav {
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    a {
      font-weight: bold;
      font-family: 'Pridi', serif;
    }
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

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    nav {
      padding-top: 3rem;
      width: 100%;
    }
  }
`;
