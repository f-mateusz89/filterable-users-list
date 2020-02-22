import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UsersList(): JSX.Element {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers(): Promise<void> {
      const { data } = await axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users',
      });

      setUsers(data);
    }

    fetchUsers();
  }, []);

  return <div>Users list</div>;
}

export default UsersList;
