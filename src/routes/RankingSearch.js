import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Heading,
} from '@chakra-ui/react';
import { SearchProfile } from '../components/searchRanking';
import Header from '../components/Header';

export default function RankingSearch() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Heading>Ranking Search</Heading>
          <VStack spacing={8}>
            <SearchProfile />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
