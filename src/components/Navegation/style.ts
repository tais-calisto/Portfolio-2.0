import styled from 'styled-components';

export const NavStyle = styled.nav`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  a {
    z-index: 1;
    font-weight: bold;
    font-family: 'Pridi', serif;
    font-size: 1.25rem;
    &:hover {
      transform: rotate(10deg);
    }
  }
  .active {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 90%;
    padding-top: 2rem;
  }
`;
