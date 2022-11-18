import styled from 'styled-components';

export const ContactStyle = styled.main`
  h2 {
    margin-left: 3rem;
  }
  div {
    margin: 0 6rem 0 3rem;
    display: flex;
    justify-content: space-between;
    border-color: ${({ theme }) => theme.colors.primary};
    border-style: solid;
    border-width: 2px;
    border-radius: 10px;
  }
  p {
    background-color: ${({ theme }) => theme.colors.darkGray};
    border-radius: 10px 0 0 10px;
    padding: 2rem;
    width: 70%;
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 2rem;
    width: 30%;
    list-style: none;
    line-height: 2rem;
    li {
      color: ${({ theme }) => theme.colors.primary};
    }
    legend {
      color: ${({ theme }) => theme.colors.white};
    }
  }
  li {
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    :hover {
      opacity: 0.8;
    }
  }
`;
