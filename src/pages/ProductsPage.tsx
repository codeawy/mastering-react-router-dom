// UserList.js
import axios from "axios";
import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      await axios.get("https://jsonplaceholder.typicode.com/users").then(response => setUsers(response.data));
    })();
  }, []);

  return (
    <ul>
      {users.map((user: { id: number; name: string }) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
