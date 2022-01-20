import {
  SubContainer,
  Container,
  Title,
  Item,
  Button,
  BtnCancel,
} from "./Styles";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

export default function Detail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [client, setclient] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    axios.get(`/findOne/${location.state}`).then((response) => {
      setclient(response.data);
    });
  }, [mounted]);

  function handleReturn() {
    navigate("/list");
  }

  return (
    <Container>
      <Title>
        <h2>Cliente</h2>
      </Title>
      <SubContainer>
        <Item>
          <label>Nome:</label>
          <span>
            {client.name} {client.lastName}
          </span>
        </Item>
        <Item>
          <label>E-mail:</label>
          <span>{client.email}</span>
        </Item>
        <Item>
          <label>Telefone:</label>
          <span>{client.phone}</span>
        </Item>
        <Item>
          <label>CEP:</label>
          <span>{client.zipCode}</span>
        </Item>
        <Item>
          <label>Endereço:</label>
          <span>
            {client.address1}
            {", "}
            {client.address2}
          </span>
        </Item>
        <Item>
          <label>Data de Nascimento:</label>
          <span>{client.birthDate}</span>
        </Item>
        <Item>
          <label>CPF:</label>
          <span>{client.cpf}</span>
        </Item>
        <Item>
          <label>Renda Mensal:</label>
          <span>{client.rendaMensal}</span>
        </Item>
        <Item>
          <Button>
            <BtnCancel type="submit" value="Voltar" onClick={handleReturn} />
          </Button>
        </Item>
      </SubContainer>
    </Container>
  );
}
