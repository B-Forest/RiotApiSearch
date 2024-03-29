import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  
  Button,
  Heading,
  Flex,
} from '@chakra-ui/react';

//import { AppContext } from './context/appContext';
import Header from './components/Header';
import { Link } from "react-router-dom";


function App() {
  return (
    <>
      <Header/>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>      
          <VStack spacing={8}>
          <div className='App'>
              <div className='container'>
                <Heading>Home Page</Heading>
              <Text> Voici les liens de nos différentes fonctionalités </Text>
              <Text>Vous pouvez avec cette application rechercher le profile d'un jouer et aussi afficher le classement de chaque divisions</Text>
              <Flex minWidth='max-content' direction='column' justify='space-around'  gap='50' m='20'>
                <Link className="nav-item" to='/rankingsearch'><Button colorScheme='blue' size='lg'>Ranking</Button></Link>
                <Link className="nav-item" to='/profilesearch'><Button colorScheme='blue' size='lg'>Profile</Button></Link>
              </Flex>
              </div>
          </div>
          </VStack>
        </Grid>
      </Box>
    </>
  );
}

export default App;
