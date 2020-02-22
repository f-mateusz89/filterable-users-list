import React from 'react';
import Box from '@material-ui/core/Box';

import Theme from 'theme';

function App(): JSX.Element {
  return (
    <Theme>
      <Box bgcolor="background.paper">Hello World!</Box>
    </Theme>
  );
}

export default App;
