import { useState } from "react";

import axios from "axios";
import {
  Container,
  SubContainer,
  Title,
  Form,
  FormItem,
  Button,
  BtnSubmit,
  BtnCancel,
} from "./Styles";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [button, setButton] = useState("próximo");
  const [openMsg, setOpenMsg] = useState(false);
  const [message, setMessage] = useState();

  const [formValues, setFormValues] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    zipCode: "",
    address1: "",
    address2: "",
    birthDate: "",
    cpf: "",
    rendaMensal: 0,
  });

  function handleSubmit(event) {
    const client = {
      name: formValues.name,
      lastName: formValues.lastname,
      email: formValues.email,
      phone: formValues.phone,
      zipCode: formValues.zipCode,
      address1: formValues.address1,
      address2: formValues.address2,
      birthDate: formValues.birthDate,
      cpf: formValues.cpf,
      rendaMensal: parseFloat(formValues.rendaMensal),
    };

    event.preventDefault();
    if (step === 2) {
      setButton("Enviar");
    }
    setStep((prev) => prev + 1);

    if (button === "Enviar") {
      axios
        .post("/create", client)
        .then((response) => {
          setMessage("Usuário cadastrado com sucesso");
          setOpenMsg(true);
          navigate("/");
        })
        .catch((error) => {
          setMessage(error.response.data.message);
          setOpenMsg(true);
        });
    }
  }

  function handleInputChange(event) {
    const { id, value } = event.target;

    setFormValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  function fechaModal() {
    if (openMsg) {
      setOpenMsg(false);
    }
  }
  return (
    <Container>
      <SubContainer>
        <Title>
          <h2>Novo Cadastro</h2>
        </Title>
        <Form onSubmit={handleSubmit}>
          {step === 1 ? (
            <>
              <FormItem>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  onChange={handleInputChange}
                  required
                ></input>
              </FormItem>
              <FormItem>
                <label htmlFor="lastname">Sobrenome</label>
                <input
                  type="text"
                  id="lastname"
                  onChange={handleInputChange}
                  required
                ></input>
              </FormItem>
              <FormItem>
                <label htmlFor="email">E-mail</label>
                <input
                  type="text"
                  id="email"
                  onChange={handleInputChange}
                  required
                ></input>
              </FormItem>
              <FormItem>
                <label htmlFor="phone">Telefone</label>
                <input
                  type="number"
                  id="phone"
                  onChange={handleInputChange}
                  required
                ></input>
              </FormItem>
              <FormItem>
                <Button>
                  <BtnSubmit type="submit" value={button} />
                </Button>
              </FormItem>
            </>
          ) : step === 2 ? (
            <>
              <FormItem>
                <label htmlFor="zipCode">CEP</label>
                <input
                  type="number"
                  id="zipCode"
                  onChange={handleInputChange}
                  required
                ></input>
              </FormItem>
              <FormItem>
                <label htmlFor="address1">Endereço 1</label>
                <input
                  type="text"
                  id="address1"
                  onChange={handleInputChange}
                  required
                ></input>
              </FormItem>
              <FormItem>
                <label htmlFor="address2">Endereço 2</label>
                <input
                  type="text"
                  id="address2"
                  onChange={handleInputChange}
                  required
                ></input>
              </FormItem>
              <FormItem>
                <Button>
                  <BtnSubmit type="submit" value={button} />
                </Button>
              </FormItem>
            </>
          ) : (
            <>
              <FormItem>
                <label htmlFor="birthDate">Data de Nascimento</label>
                <input
                  type="date"
                  id="birthDate"
                  onChange={handleInputChange}
                  required
                ></input>
              </FormItem>
              <FormItem>
                <label htmlFor="cpf">CPF</label>
                <input
                  type="number"
                  id="cpf"
                  onChange={handleInputChange}
                  required
                ></input>
              </FormItem>
              <FormItem>
                <label htmlFor="rendaMensal">Renda Mensal</label>
                <input
                  type="number"
                  step="0.01"
                  id="rendaMensal"
                  onChange={handleInputChange}
                  required
                ></input>
              </FormItem>
              <FormItem>
                <Button>
                  <BtnSubmit type="submit" value={button} />
                </Button>
              </FormItem>
            </>
          )}
        </Form>
        <Modal open={openMsg} center showCloseIcon={false}>
          <h3>{message}</h3>
          <Button>
            <BtnCancel type="submit" value="Fechar" onClick={fechaModal} />
          </Button>
        </Modal>
      </SubContainer>
    </Container>
  );
}
