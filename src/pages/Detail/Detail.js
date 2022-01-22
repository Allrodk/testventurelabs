import {
  SubContainer,
  Container,
  Main,
  Title,
  Item,
  Button,
  BtnCancel,
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
  const [listClient, setListClient] = useState([]);
  const [indexNow, setIndexNow] = useState(0);

  async function handleInputChange() {
    if (mounted) {
      await axios.get(`/findOne/${location.state}`).then((response) => {
        setData(response.data);
        setClient(response.data);
      });
    }
  }

  async function setData(response) {
    let resp = await response;
    console.log(await response);
    resp.phone = Phone(resp.phone);
    resp.zipCode = Zipcode(resp.zipCode);
    resp.birthDate = FormatDate(resp.birthDate);
    resp.cpf = CPF(resp.cpf);
    resp.rendaMensal = resp.rendaMensal.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  useEffect(() => {
    handleInputChange();
    setMounted(true);
  }, [mounted]);

  function handleReturn() {
    navigate("/list");
  }

  const getData = async () => {
    await axios.get("findAll").then((response) => {
      setListClient(response.data);
      setIndexNow( location.state);
      console.log(`Buscou: ${ response.data}`);
    });
    // return response.data;
  };

  const handleBack = async () => {
    getData();
    console.log(indexNow);
    console.log(listClient);

    // await Promise.All(
    listClient.map(async (el, index) => {
      if ((await listClient[index]._id) === ( indexNow)) {
        console.log(indexNow);
        console.log(await listClient[index]);
        setIndexNow(await listClient[index - 1]);
      }
    });
    // );

    console.log(indexNow);
    setData(await listClient[indexNow]);
    setClient(await listClient[indexNow]);
  };

  function handleNext() {
    // if (!listClient) {
    //   getData();
    // }
    // listClient.map((item, index) => {
    //   if ((listClient[index]._id = location.state)) {
    //     location.state = listClient[index + 1]._id;
    //     handleInputChange();
    //   }
    // });
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
    </Container>
  );
}
