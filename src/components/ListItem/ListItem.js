import { useNavigate } from "react-router-dom";
import { Container, Item } from "./Styles";

export default function ClientList(props) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/detail", { state: props.id });
  }
  return (
    <Container>
      <Item onClick={handleClick}>
        <p>{props.name}</p>
        <h2>{props.email}</h2>
      </Item>
    </Container>
  );
}
