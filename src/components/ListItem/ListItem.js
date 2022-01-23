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
        <p> {props.sort < 10 ? "0" + props.sort : props.sort}</p>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </Item>
    </Container>
  );
}
