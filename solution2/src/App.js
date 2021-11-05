import React from 'react';
import { Box } from '@chakra-ui/react';

import ButtonContainer from './components/button-container/ButtonContainer';
import TableComponent from './components/table/Table';

const App = () => {
    return (
    <Box>
      <ButtonContainer />
      <TableComponent />
    </Box>
  )
}

export default App;
