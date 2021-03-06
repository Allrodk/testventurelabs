import {
  Container,
  Logo,
  Square,
  Links,
  List,
  ListItem,
  Hamburger,
} from "./Styles";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [myTimeout, setMyTimeout] = useState("");
  const [mounted, setMounted] = useState(false);
  const [menu, setMenu] = useState([
    {
      href: "/register",
      link: "Cadastrar",
      icon: "login.png",
    },
    {
      href: "/list",
      link: "Clientes",
      icon: "register.png",
    },
  ]);

  useEffect(() => {
    setMounted(true);
    setMenu(menu);
  }, [mounted]);

  const handleAbreMenu = () => {
    if (!open) {
      setOpen(true);
      setMyTimeout(
        setTimeout(() => {
          setOpen(false);
        }, 5000)
      );
    } else {
      setOpen(false);
      clearTimeout(myTimeout);
    }
  };

  const handleMouseOver = () => {
    setOpen(true);
    clearTimeout(myTimeout);
  };

  const handleMouseOut = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Links>
        <Hamburger onClick={handleAbreMenu}>
          <a href="#foo">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </Hamburger>
        <List
          active={open}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <Logo href="/">
            <span>Bem-vindo!</span>
          </Logo>
          {menu.map((item) => {
            return (
              <ListItem onClick={handleClick} key={item.link.toString()}>
                <Square>
                  <a href={item.href}>
                    <span>{item.link}</span>
                  </a>
                </Square>
              </ListItem>
            );
          })}
        </List>
      </Links>
    </Container>
  );
}
