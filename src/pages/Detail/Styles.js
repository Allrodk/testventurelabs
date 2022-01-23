import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100vw - 10.5rem);
  margin-top: 3.7rem;
  margin-left: 10.5em;
  @media (max-width: 600px) {
    margin-left: 30px;
    width: 100vw;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fff;
  h2 {
    text-align: center;
    margin: 1rem 0;
    font-weight: bold;
    color: black;
  }
  div {
    text-align: right;
    p {
      margin: 0.5rem 1rem;
    }
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 7rem;
  color: #fff;
  border: 1px solid;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  a {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 3rem;
  }
  a:hover {
    cursor: pointer;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: center;
  color: #000;

  span {
    font-size: 1.2em;
    font-weight: bold;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  padding: 0.25rem 1.3rem;
  height: 5rem;
  gap: 0.1rem;
  text-decoration: none;
  color: #fff;
  border: 1px solid;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.25rem 1rem;
  text-decoration: none;
  color: #000;
  &:hover {
    cursor: pointer;
    background-color: #414040;
    color: #fff;
  }
`;
