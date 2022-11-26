import styled from 'styled-components';

export const ProjectsStyle = styled.main`
  h2 {
    margin-left: 3rem;
  }
  .scroller {
    margin: 0 6rem 0 3rem;
    background-color: transparent;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 45%;
    gap: 1rem;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    scrollbar-color: ${({ theme }) => theme.colors.primary}
      ${({ theme }) => theme.colors.gray};
    scrollbar-width: thin;
  }

  div {
    background-color: ${({ theme }) => theme.colors.darkGray};
    padding-bottom: 1rem;
    border-radius: 10px;
    article {
      width: 80%;
      margin: auto;
    }
    h3 {
      color: ${({ theme }) => theme.colors.secondary};
    }
    .tecnologies,
    .links {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      ul {
        padding: 0;
      }
      p {
        margin-bottom: 0;
        font-size: 0.9rem;
        color: ${({ theme }) => theme.colors.secondary};
      }
      li {
        list-style: none;
        display: inline;
        margin-right: 1rem;
      }
    }

    .tecnologies {
      li {
        padding: 0.2rem 0.4rem;
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 5px;
        color: ${({ theme }) => theme.colors.darkGray};
      }
    }

    .links {
      a {
        font-size: 1rem;
        font-weight: bold;
        text-decoration: none;
        padding: 0.2rem 0.4rem;
        border: 2px solid ${({ theme }) => theme.colors.primary};
        border-radius: 5px;
        color: ${({ theme }) => theme.colors.primary};
        &:hover {
          background-color: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.darkGray};
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    h2 {
      margin-left: 1rem;
    }

    .scroller {
      margin: 0 2rem 0 1rem;
      background-color: transparent;
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 90%;
      gap: 1rem;
    }
  }
`;
