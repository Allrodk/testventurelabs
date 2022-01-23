import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: silver;
  width: calc(100vw - 10.5rem);
  color: #fff;
  margin-top: 3.7rem;
  margin-left: 10.5em;
  @media (max-width: 600px) {
    margin-left: 30px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 0;
  gap: 1rem;
  color: #000;
  p {
    margin: 0.5rem 2rem;
    text-align: justify;
  }
  img {
    margin-top: 3rem;
    width: 8rem;
  }
 
`;
export const Links = styled.div`
  display: flex;
  gap: 1rem;
  a {
    font-size: 2rem;
  }
`;
