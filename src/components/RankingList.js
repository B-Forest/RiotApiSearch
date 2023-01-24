import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  VStack,
} from '@chakra-ui/react';
import PlayerApi from '../api/riotAPI';
import { useContext, useEffect, useState } from 'react';

export default function RankingList(rankingtab) {
  const [tab, setTab] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  //console.log(rankingtab.rankingtab[0])
  useEffect(() => {
    
    PlayerApi.getRanking(rankingtab.rankingtab[0],rankingtab.rankingtab[1],rankingtab.rankingtab[2]).then(data => {
      setTab(data);
      if (data) {
        setIsLoaded(true);
      }
    });
  }, []);

  return (
    <>
      <VStack spacing={8}>
        <Heading>Ranking {rankingtab.rankingtab[1]} {rankingtab.rankingtab[2]}</Heading>
        <Table>
          <Thead>
            <Tr>
              <Th>Ranking</Th>
              <Th>Summoner Name</Th>
              <Th>League Points</Th>
              <Th>Wins</Th>
              <Th>Losses</Th>
            </Tr>
          </Thead>
          <Tbody>
            {!isLoaded ? (
              'Chargement...'
            ) : (
              <>
                {tab.map(player =>(
                  <Tr>
                    <Td>{tab.indexOf(player)+1}</Td>
                    <Td>{player.summonerName}</Td>
                    <Td>{player.leaguePoints}</Td>
                    <Td>{player.wins}</Td>
                    <Td>{player.losses}</Td>
                  </Tr>
                ))}   
              </>
            )}
          </Tbody>
        </Table>
      </VStack>
    </>
  );
}
