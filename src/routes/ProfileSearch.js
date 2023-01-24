import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import PlayerApi from '../api/riotAPI';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function ProfileSearch() {
  const navigate = useNavigate();
  const [playerName, setPlayerName] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    PlayerApi.getPlayerId(playerName).then(data => {
      navigate(`/profile/${data.puuid}`);
    });

  };
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Heading>Profile Search</Heading>
          <VStack spacing={8}>
            <div className="container">
              <FormControl
                onSubmit={e => {
                  handleSubmit(e);
                }}
              >
                <FormLabel>Summoner Name</FormLabel>
                <Input onChange={e => setPlayerName(e.target.value)} />
                <Button type="submit" onClick={e => {handleSubmit(e)}}>Rechercher</Button>
              </FormControl>
            </div>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
