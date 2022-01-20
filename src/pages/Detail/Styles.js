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
  margin: 1rem 0;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: center;

  span {
    font-size: 1.2em;
    font-weight: bold;
  }
`;

export const Button = styled.div`
  margin-top: 0.6rem;
  display: flex;
  justify-content: center;
  gap: 0.3rem;
`;

export const BtnCancel = styled.input`
  padding: 0.3rem;
  color: red;
  background-color: white;
  border-radius: 3px;
  width: 6rem;

  &:hover {
    color: white;
    background-color: red;
  }
`;
