import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, List, ListItem } from "./Styles";

export default function ClientList(props) {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  useEffect(() => {
    navigate("/list", { state: page });
  }, [page]);

  let numPages = [];
  for (let i = 0; i < props.qtdPages; i++) {
    numPages.push(i);
  }

  return (
    <Container>
      <List>
        <ListItem key={1} onClick={() => setPage(1)}>
          Primeira
        </ListItem>
        <ListItem
          key={2}
          onClick={() => {
            page <= 1 ? setPage(1) : setPage(page - 1);
          }}
        >
          Anterior
        </ListItem>
        {numPages.map((i) => {
          return (
            <ListItem key={i + 4} onClick={() => setPage(i + 1)}>
              {i + 1}
            </ListItem>
          );
        })}
        <ListItem
          key={3}
          onClick={() => {
            page >= props.qtdPages
              ? setPage(props.qtdPages)
              : setPage(page + 1);
          }}
        >
          Próxima
        </ListItem>
        <ListItem key={4} onClick={() => setPage(props.qtdPages)}>
          Última
        </ListItem>
      </List>
    </Container>
  );
}
