import {
  SubContainer,
  Container,
  Main,
  Title,
  Item,
  List,
  ListItem,
} from "./Styles";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Phone, Zipcode, CPF, FormatDate } from "../../utils/Masks";
import axios from "axios";

export default function Detail() {
  const location = useLocation();
  const [client, setClient] = useState({});
  const [mounted, setMounted] = useState(false);
  const [indexNow, setIndexNow] = useState(0);
  const [listClient, setListClient] = useState([]);
  let indexSet = 0;

  async function setData(resp) {
    resp.phone = Phone(resp.phone);
    resp.zipCode = Zipcode(resp.zipCode);
    resp.birthDate = FormatDate(resp.birthDate);
    resp.cpf = CPF(resp.cpf);
    resp.rendaMensal = resp.rendaMensal.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  const getData = async () => {
    if (listClient.length < 1) {
      await axios.get("/findAll").then((response) => {
        let idNow = location.state;
        response.data.map((item, index) => {
          if (idNow) {
            if (idNow === response.data[index]._id) {
              setData(item);
              setClient(item);
              location.state = item._id;
              setIndexNow(index);
            }
          } else {
            setData(response.data[0]);
            setClient(response.data[0]);
            location.state = response.data[0]._id;
            setIndexNow(0);
          }
          setListClient(response.data);
        });
      });
    } else {
      if (indexNow + indexSet >= 0) {
        if (indexNow + indexSet < listClient.length) {
          setData(listClient[indexNow + indexSet]);
          setClient(listClient[indexNow + indexSet]);
          location.state = listClient[indexNow + indexSet]._id;
          setIndexNow(indexNow + indexSet);
        }
      }
    }
  };

  useEffect(() => {
    setMounted(true);
    getData();
  }, [mounted]);

  function handleFirst() {
    indexSet = -indexNow;
    getData();
  }

  function handleBack() {
    indexSet = -1;
    getData();
  }

  function handleNext() {
    indexSet = 1;
    getData();
  }

  function handleLast() {
    indexSet = listClient.length - indexNow - 1;
    getData();
  }

  return (
    <Container>
      <Main>
        <Title>
          <div>
            <h2>Cliente</h2>
          </div>
          <div>
            <p>
              {"Exibindo "}
              {indexNow + 1}/{listClient.length}
            </p>
          </div>
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
        </SubContainer>
        <List>
          <ListItem key={1} onClick={handleFirst}>
            Primeira
          </ListItem>
          <ListItem key={2} onClick={handleBack}>
            Anterior
          </ListItem>
          <ListItem key={3} onClick={handleNext}>
            Próxima
          </ListItem>
          <ListItem key={4} onClick={handleLast}>
            Última
          </ListItem>
        </List>
      </Main>
    </Container>
  );
}
