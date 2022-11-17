import styled from 'styled-components';

export const ContactStyle = styled.main`
  h2 {
    margin-left: 3rem;
  }
  div {
    margin: 0 6rem 0 3rem;
    display: flex;
    justify-content: space-between;
  }
  p {
    background-color: ${({ theme }) => theme.colors.darkGray};
    border-radius: 10px 0 0 10px;
    padding: 2rem;
    width: 70%;
  }
  ul {
    padding: 2rem;
    width: 30%;
    border-color: ${({ theme }) => theme.colors.primary};
    border-style: solid;
    border-width: 2px 2px 2px 0;
    border-radius: 0 10px 10px 0;
    list-style: none;
    line-height: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  li {
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    :hover {
      opacity: 0.8;
    }
  }
`;
