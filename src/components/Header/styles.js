import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10px 30px 10px 30px;

  background-color: var(--secondary-color);
`;

export const Logo = styled.a`
  :hover {
    cursor: pointer;

    opacity: 0.8;
    transition: opacity .5s ease-in-out;
  }

  > img {
    height: auto;
    width: 250px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  padding-right: 60px;
`;
