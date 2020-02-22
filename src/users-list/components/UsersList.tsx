import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

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
  const [users, setUsers] = useState([]);
  const classes = useStyles();

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
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField label="Search by user name..." />
      </form>

      <List dense>
        {users.map(
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
