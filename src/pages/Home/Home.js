import { Container, Title, Links } from "./Styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ClientList(props) {
 
  return (
    <Container>
      <Title >
        <h2>Bem-vindo</h2>
        <p>
          &emsp;&emsp;&emsp;Este é um aplicativo Web para gerenciamento de
          Clientes desenvolvido por Adriano Lamas.
        </p>
        <img
          src="https://avatars.githubusercontent.com/u/89049143?v=4"
          alt="Adriano"
        />
        <Links>
          <a href="https://www.linkedin.com/in/adriano-lamas-lima-97a9531a5/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Allrodk">
            <FaGithub />
          </a>
        </Links>
        <p>
          &emsp;&emsp;&emsp;Dev Fullstack em formação na Blue EdTech, empenhado
          e sempre disposto a aprender cada vez mais. Além da Programação,
          também sou um amante do Rock Progressivo. A maior parte da minha
          carreira profissional foi voltada para área de Suporte em TI. E agora,
          buscando uma realocação na área de desenvolvimento.
        </p>
      </Title>
    </Container>
  );
}
