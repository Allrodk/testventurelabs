import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Main, Section } from "./IndexStyles";
import Home from './pages/Home/Home'
import SideBar from "./components/SideBar/SideBar";
import Title from "./components/Title/Title";
import Detail from "./pages/Detail/Detail";
import Register from "./pages/Register/Register";
import ClientList from "./pages/ClientList/ClientList";

import axios from "axios";

axios.defaults.baseURL = "https://api-mongodb-test.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Main>
        <SideBar />
        <Section>
          <Title />
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/list" element={<ClientList />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </Section>
      </Main>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
