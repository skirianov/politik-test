import React from 'react';
import { Box } from '@chakra-ui/react';

import ButtonComp from '../button/Button';

const ButtonContainer = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      my="6"
    >
      <ButtonComp value="" data="councillors" />
      <ButtonComp value="id" data="cantons" />
      <ButtonComp value="updated" data="affairs/states" /> {/*//Affairs does not provide any Date, so was choosen affair states */}
    </Box>
  )
}

export default ButtonContainer;