import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  background-color: Silver;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 99;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const Links = styled.div``;

export const Logo = styled.a`
  list-style: none;
  text-decoration: none;
  text-align: center;
  padding: 0.8rem;
  width: 100%;
  background-color: black;

  &:hover {
    cursor: pointer;
    transition: 400ms;
    transform: scale(1.1);
  }

  span {
    color: white;
    background-color: black;
    border: solid white;
    border-radius: 10px;
    font-size: 1.8rem;
  }
`;

export const List = styled.ul` 
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: Silver;
  height: 100vh;
  border-radius: 0 10px 0 0;
  gap: 0.8rem;

  @media (max-width: 600px) {
    position: fixed;      
    flex-direction: column;   
    gap: 1rem;    
    width: 15rem;
    top: 1%;
    height: 98%;  
    padding: 1.2rem 0;
    font-weight: bold;
    border-radius: 10px;
    transition: 0.3s;
    box-shadow: 1px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    right: ${(props) => (props.active ? "30px" : "-100%")};
    z-index: 10;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
    transition: 400ms;
    font-weight: bold;
    transform: scale(1.1);
  }

  a {
    display: flex;
    gap: 0.1rem;
    color: black;
    text-decoration: none;
  }
`;

export const Hamburger = styled.div`
  display: none;
  background-color: transparent;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    transition: 400ms;
    /* transform: scale(1.1); */
  }

  span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 3px;
    background-color: black;
  }

  @media (max-width: 600px) {
    display: block;
  }
`;
