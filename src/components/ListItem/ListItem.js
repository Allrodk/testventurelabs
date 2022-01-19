import { Container, Item, Square } from "./Styles";

export default function ClientList(props) {
  function handleClick() {}
  return (
    <Container>
      <Item onClick={handleClick}>
        <Square>
          <p>{props.name}</p>
        </Square>
        <h2>{props.email}</h2>
      </Item>
    </Container>
  );
}
