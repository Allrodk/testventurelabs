import { useEffect, useState } from "react";
import ListItem from "../../components/ListItem/ListItem";
import ListBar from "../../components/ListBar/ListBar";
import axios from "axios";
import { Container, SubContainer, Title } from "./Styles";
import { useLocation } from "react-router-dom";

export default function ClientList() {
  const [clientList, setClientList] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [qtdPages, setQtdPages] = useState(0);
  const [qtdItemPage, setQtdItemPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const location = useLocation();

  const getData = async () => {
    await axios.get("findAll").then((response) => {
      setClientList(response.data);
      setTotalItems(response.data.length);
      let result = Math.floor(response.data.length / qtdItemPage);
      let rest = response.data.length % qtdItemPage;
      rest > 0 ? setQtdPages(result + 1) : setQtdPages(result);
    });
  };
  useEffect(() => {
    setMounted(true);
    getData();
  }, [mounted]);

  const lista = [1, 2, 3, 4, 5, 6, 7, 8];
  const calc = qtdPages * qtdItemPage - totalItems;
  let addList = [];
  if (calc > 0) {
    for (let i = 0; i < calc; i++) {
      addList.push(i + 1 + totalItems);
    }
  }

  return (
    <Container>
      <SubContainer>
        <Title>
          <div>
            <h2>Lista de Clientes</h2>
          </div>
          <div>
            <p>
              {"Página "}
              {location.state}/{qtdPages}
            </p>
          </div>
        </Title>
        {clientList.map((el, index) => {
          if (
            index >= location.state * qtdItemPage - qtdItemPage &&
            index < location.state * qtdItemPage
          ) {
            return (
              <ListItem
                key={el._id}
                id={clientList[index]._id}
                sort={index + 1}
                name={clientList[index].name}
                email={clientList[index].email}
              />
            );
          }
        })}
        {addList.map((el) => {
          if (location.state * qtdItemPage - totalItems > 0) {
            return <ListItem key={el} id="" sort={el} name="" email="" />;
          }
        })}
        <ListBar      
          qtdPages={qtdPages}
          qtdItemPage={qtdItemPage}
          totalItems={totalItems}
        />       
      </SubContainer>
    </Container>
  );
}
