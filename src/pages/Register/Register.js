import { useState } from "react";
import Input from "../../components/Input/Input";

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
import { Real } from "../../utils/Masks";

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [button, setButton] = useState("Avançar");
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
    rendaMensal: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    let r = formValues.rendaMensal.toString().replace("R$", "");
    r = r.replace(".", "");
    r = r.replace(",", ".");
    formValues.rendaMensal = parseFloat(r);

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
      rendaMensal: formValues.rendaMensal,
    };

    if (step === 2) {
      setButton("Enviar");
    }
    setStep((prev) => prev + 1);

    if (button === "Enviar") {
      axios
        .post("/create", client)
        .then((response) => {
          setMessage("Cliente cadastrado com sucesso!");
          setOpenMsg(true);
        })
        .catch((error) => {
          setMessage(
            "Algum campo não foi preenchido corretamente. Por favor, revise e envie novamente."
          );
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
      setStep(1);
      setButton("Avançar");
      navigate("/register");
      if (message.match("sucesso")) {
        window.location.reload();
      }
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
                  defaultValue={formValues.name}
                  onChange={handleInputChange}
                  required
                ></input>
              </FormItem>
              <FormItem>
                <label htmlFor="lastname">Sobrenome</label>
                <input
                  type="text"
                  id="lastname"
                  defaultValue={formValues.lastname}
                  onChange={handleInputChange}
                  required
                ></input>
              </FormItem>
              <FormItem>
                <label htmlFor="email">E-mail</label>
                <input
                  type="text"
                  id="email"
                  defaultValue={formValues.email}
                  onChange={handleInputChange}
                  required
                ></input>
              </FormItem>
              <FormItem>
                <label htmlFor="phone">Telefone</label>
                <Input
                  type="text"
                  id="phone"
                  mask="Phone"
                  defaultValue={formValues.phone}
                  inputMaskChange={handleInputChange}
                  required
                ></Input>
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
                <Input
                  type="text"
                  id="zipCode"
                  mask="Zipcode"
                  defaultValue={formValues.zipCode}
                  inputMaskChange={handleInputChange}
                  required
                ></Input>
              </FormItem>
              <FormItem>
                <label htmlFor="address1">Endereço 1</label>
                <input
                  type="text"
                  id="address1"
                  defaultValue={formValues.address1}
                  onChange={handleInputChange}
                  required
                ></input>
              </FormItem>
              <FormItem>
                <label htmlFor="address2">Endereço 2</label>
                <input
                  type="text"
                  id="address2"
                  defaultValue={formValues.address2}
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
                  defaultValue={formValues.birthDate}
                  onChange={handleInputChange}
                  required
                ></input>
              </FormItem>
              <FormItem>
                <label htmlFor="cpf">CPF</label>
                <Input
                  type="text"
                  id="cpf"
                  mask="CPF"
                  defaultValue={formValues.cpf}
                  inputMaskChange={handleInputChange}
                  required
                ></Input>
              </FormItem>
              <FormItem>
                <label htmlFor="rendaMensal">Renda Mensal</label>
                <Input
                  type="text"
                  step="0.01"
                  id="rendaMensal"
                  mask="Real"
                  defaultValue={Real(formValues.rendaMensal.toString())}
                  inputMaskChange={handleInputChange}
                  required
                ></Input>
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
