import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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

  return (
    <List dense>
      {users.map(
        ({ id, name, username }, index): React.ReactElement => (
          <ListItem key={id}>
            <ListItemText
              primary={`${index + 1}. ${name}`}
              secondary={username}
            />
          </ListItem>
        ),
      )}
    </List>
  );
}

export default UsersList;
