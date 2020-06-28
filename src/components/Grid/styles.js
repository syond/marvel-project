import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  list-style: none;

  > li {
    border: 2px solid #f5f5f5;
    border-radius: 8px;
    height: 425px;
    width: 280px;
    margin-bottom: 60px;
  }

  > li > img {
    height: 100%;
    width: 100%;
  }

  > li > span {
    font-size: 22px;
    font-weight: bold;
    color: var(--white);
  }

  >li > span:hover{
    color: var(--primary-color);
    cursor: pointer;
  }
`;
