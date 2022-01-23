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

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;  
`;


export const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h2 {
    text-align: center;
    margin: 1rem 0;
    font-weight: bold;
    color: black;
  }
  div {
    text-align: right;
    p {
      margin: 0.5rem 1rem ;
    }
  }
`;
