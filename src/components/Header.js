import React from 'react';
import { 
    Flex,
    Box,
    Heading,
    Spacer,
 } from '@chakra-ui/react';
 import Nav from './Nav';
 import { ColorModeSwitcher } from '../ColorModeSwitcher';

export default function Header() {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box p='1'>
      <Heading size='md'>Riot S</Heading>
      </Box>
      <Spacer/>
      <Box textAlign="center" p='1'>
      <Nav />
      </Box>
      <Spacer />
      <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
  )
}
