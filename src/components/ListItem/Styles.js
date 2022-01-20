import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin: 0.5rem 0.8rem 0.5rem;
  padding-left: 0.5rem;
  width: 100vw;
  height: 3rem;
  border: 1px solid;
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  text-decoration: none;
  color: #000;
  h2 {
    font-size: 1.4em;
  }
  &:hover {
    cursor: pointer;
    background-color: white;
  }
`;
export const Square = styled.div`
  background-color: #2193d1;
  padding: 0.2rem;
  border-radius: 0.8rem;
  color: #fff;
  font-size: 1.8em;
`;
