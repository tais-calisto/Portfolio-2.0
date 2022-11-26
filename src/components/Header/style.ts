import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    width: 14.125rem;
    display: flex;
    justify-content: space-between;
    a {
      text-decoration: none;
      &:hover {
        transform: rotate(10deg);
      }
    }
  }
  .background-detail {
    position: fixed;
    width: 16rem;
    height: 16rem;
    left: -50px;
    top: -37px;
    background: rgba(187, 161, 208, 0.15);
    filter: blur(40px);
    border-radius: 50%;
    -webkit-filter: blur(40px);
    -moz-filter: blur(40px);
    -ms-filter: blur(40px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    justify-content: center;
    nav {
      display: none;
    }
  }
`;
