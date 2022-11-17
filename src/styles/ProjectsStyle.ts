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
    /* img {
      width: 10rem;
      height: 10rem;
      object-fit: cover;
    } */
    .tecnologies,
    .links {
      display: flex;
      gap: 1rem;
    }

    .tecnologies {
      p {
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
        border: 2px solid ${({ theme }) => theme.colors.secondary};
        border-radius: 5px;
        color: ${({ theme }) => theme.colors.secondary};
        &:hover {
          background-color: ${({ theme }) => theme.colors.secondary};
          color: ${({ theme }) => theme.colors.darkGray};
        }
      }
    }
  }
`;
