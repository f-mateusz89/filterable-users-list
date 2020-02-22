import React from 'react';

import Theme from 'theme';
import UsersList from 'users-list';
import Box from '@material-ui/core/Box';

function App(): JSX.Element {
  return (
    <Theme>
      <div>
        <Box fontSize="h6.fontSize" m={1}>
          Users List
        </Box>
        <UsersList />
      </div>
    </Theme>
  );
}

export default App;
