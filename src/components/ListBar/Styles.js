import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;  
  margin: 0.8rem 0.3rem 0.8rem 0.8rem; 
  height: 5rem;
  border: 1px solid; 
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0.25rem 1.3rem;
  gap: 0.1rem;  
  text-decoration: none;
  color: #000;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;  
  padding: 0.25rem 1rem;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: #414040;
    color: #fff;
  }
`;
