import {
  SubContainer,
  Container,
  Main,
  Title,
  Item,
  Button,
  BtnCancel,
  Qtd,
} from "./Styles";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Phone, Zipcode, CPF, FormatDate } from "../../utils/Masks";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import axios from "axios";

export default function Detail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [client, setClient] = useState({});
  const [mounted, setMounted] = useState(false);
  const [indexSet, setIndexSet] = useState(0);
  const [indexNow, setIndexNow] = useState(0);
  const [listClient, setListClient] = useState([]);

  async function setData(resp) {
    console.log(resp);
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
          if (idNow === response.data[index]._id) {
            setData(item);
            setClient(item);
            location.state = item._id;
            setListClient(response.data);
            setIndexNow(index);
          }
        });
      });
    } else {
      console.log(indexNow + indexSet);
      if (indexNow + indexSet > 0) {
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

  function handleReturn() {
    navigate("/list");
  }

  const handleBack = async () => {
    setIndexSet(-1);
    getData();
  };

  function handleNext() {
    setIndexSet(1);
    getData();
  }

  return (
    <Container>
      <Title>
        <h2>Cliente</h2>
      </Title>
      <Main>
        <a href="#foo" onClick={handleBack}>
          <FaArrowAltCircleLeft />
        </a>
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
        <a href="#foo" onClick={handleNext}>
          <FaArrowAltCircleRight />
        </a>
      </Main>
      <Qtd>
        {"Exibindo: "}
        {indexNow + indexSet + 1}/{listClient.length + 1}
      </Qtd>
    </Container>
  );
}
