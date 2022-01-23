import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100vw - 10.5rem);
  margin-top: 3.7rem;
  margin-left: 10.5em;
  @media (max-width: 600px) {
    margin-left: 30px;
    width: 100vw;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  img {
    width: 1.5rem;
  }
  h2 {
    margin: 1rem 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;
  height: 20rem;
  border: 1px solid #fff;
  margin: 0.2rem 0.3rem 0.2rem 0.8rem;
  padding: 1.5rem;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  a {
    margin-top: 2rem;
  }
`;

export const Terms = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.3rem;
`;

export const Button = styled.div`
  margin-top: 0.6rem;
  display: flex;
  justify-content: center;
  gap: 0.3rem;
`;

export const BtnSubmit = styled.input`
  padding: 0.3rem;
  color: #414040;
  background-color: white;
  border-radius: 3px;
  width: 6rem;

  &:hover {
    color: white;
    background-color: #414040;
  }
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

export const Empty = styled.div`
  padding: 15rem;
`;
