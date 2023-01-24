import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Button,
  FormHelperText,
} from '@chakra-ui/react';
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";
import {  useState } from "react";
import PlayerApi from '../api/riotAPI';

export default function RankingSearch() {

  const navigate = useNavigate();
  const [rankingTab, setRankingTab] = useState([])

  const handleSubmit = (e) => {
    console.log(rankingTab)
    e.preventDefault();
    PlayerApi.getRanking(rankingTab).then(data =>{
      navigate(`/ranking/${rankingTab[0]}`)
    })
  }

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Heading>Ranking Search</Heading>
          <VStack spacing={8}>
          <div className="container">
              <FormControl>
                <FormLabel>Ranking for Iron to Challenger</FormLabel>
                <Select placeholder="Queue" onChange={e => setRankingTab(e.target.value)}>
                  <option value="RANKED_SOLO_5x5">Solo Queue</option>
                  <option value="RANKED_FLEX_SR">Flex Queue</option>
                </Select>
                <Select placeholder="Tier" onChange={e => setRankingTab(e.target.value)}>
                  <option value="CHALLENGER">Challenger</option>
                  <option value="GRANDMASTER">Grandmaster</option>
                  <option value="MASTER">Master</option>
                  <option value="DIAMOND">Diamond</option>
                  <option value="PLATINUM">Platinum</option>
                  <option value="GOLD">Gold</option>
                  <option value="SILVER">Silver</option>
                  <option value="BRONZE">Bronze</option>
                  <option value="IRON">Iron</option>
                </Select>
                <Select placeholder="Division" onChange={e => setRankingTab(e.target.value)}>
                  <option value="I">I</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                </Select>
                <FormHelperText>You have to select division I if you're looking for ranking above Diamond</FormHelperText>
                <Button mt={4} colorScheme="teal" type="submit" onClick={e => {handleSubmit(e)}}>
                  Submit
                </Button>
              </FormControl>
              </div>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
