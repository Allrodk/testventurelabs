import { useEffect, useState } from "react";
import { ListItem } from "../../components/ListItem/ListItem";
import axios from "axios";

export default function ClientList() {
  const [userList, setUserList] = useState([]);

  const getData = async () => {
    await axios.get("findAll").then((response) => {
      setUserList(response.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {userList.map((user) => (
        <ListItem
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
        />
      ))}
    </>
  );
}
