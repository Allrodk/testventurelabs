import { useEffect, useState } from "react";
import ListItem from "../../components/ListItem/ListItem";
import axios from "axios";
import { Container } from "./Styles";

export default function ClientList() {
  const [clientList, setClientList] = useState([]);
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get("findAll").then((response) => {
      setClientList(response.data);
    });
  };
  useEffect(() => {
    setMounted(true);
    getData();
  }, [mounted]);

  return (
    <Container>
      {clientList.map((client) => (
        <ListItem
          key={client._id}
          id={client._id}
          name={client.name}
          email={client.email}
        />
      ))}
    </Container>
  );
}
