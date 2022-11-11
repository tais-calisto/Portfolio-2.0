import styled from 'styled-components'

export const ProjectsStyle = styled.main`
  .scroller {
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
    background-color: blue;
  }
`
