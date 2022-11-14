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
    }
  }
  .background-detail {
    position: absolute;
    width: 285px;
    height: 285px;
    left: -50px;
    top: -37px;
    background: rgba(187, 161, 208, 0.15);
    filter: blur(40px);
    border-radius: 50%;
  }
`;
