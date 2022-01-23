import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  margin: 0.2rem 0.3rem 0.2rem 0.8rem;
  height: 2rem;
  border: 1px solid;
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 30rem;
  padding: 0.25rem 1.3rem;
  gap: 1rem;
  text-decoration: none;
  color: #000;
  h2,
  p {
    font-size: 1.2em;
  }
  &:hover {
    cursor: pointer;
    background-color: white;
  }
`;
