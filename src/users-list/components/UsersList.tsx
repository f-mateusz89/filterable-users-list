import React, { useCallback, useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

interface User {
  id: number;
  username: string;
  name: string;
}

interface Response {
  data: User[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }),
);

function UsersList(): JSX.Element {
  const [users, setUsers] = useState([] as User[]);
  const [filter, setFilter] = useState('');
  const classes = useStyles();
  const onFilterChange = useCallback((event) => setFilter(event.target.value), [
    setFilter,
  ]);

  useEffect(() => {
    async function fetchUsers(): Promise<void> {
      const { data }: Response = await axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users',
      });

      setUsers(data);
    }

    fetchUsers();
  }, [setUsers]);

  return (
    <>
      <Box fontSize="h6.fontSize" m={1}>
        Users List
      </Box>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField label="Search by user name..." onChange={onFilterChange} />
      </form>

      <List dense>
        {users
          .filter(
            ({ name, username }) =>
              !filter ||
              name.toLowerCase().includes(filter.toLowerCase()) ||
              username.toLowerCase().includes(filter.toLowerCase()),
          )
          .map(
            ({ id, name, username }, index): React.ReactElement => (
              <ListItem key={id}>
                <ListItemText
                  primary={`${index + 1}. ${name}`}
                  secondary={`@${username}`}
                />
              </ListItem>
            ),
          )}
      </List>
    </>
  );
}

export default UsersList;
