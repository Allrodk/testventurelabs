import { useEffect, useState } from "react";
import ListItem from "../../components/ListItem/ListItem";
import axios from "axios";
import { Container } from "./Styles";

export default function ClientList() {
  const [userList, setUserList] = useState([]);
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get("findAll").then((response) => {
      setUserList(response.data);
    });
  };
  useEffect(() => {
    setMounted(true);
    getData();
  }, [mounted]);

  return (
    <Container>
      {userList.map((user) => (
        <ListItem
          key={user._id}
          id={user._id}
          name={user.name}
          email={user.email}
        />
      ))}
    </Container>
  );
}
