import {
  Card,
  CardBody,
  Wrap,
  WrapItem,
  Stack,
  Heading,
  Text,
  Avatar,
  Divider,
  VStack,
} from '@chakra-ui/react';
import PlayerApi from '../api/riotAPI';
import { useContext, useEffect, useState } from 'react';

export default function PlayerProfileCard({ puuid }) {
  const [playerId, setPlayerId] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    PlayerApi.getPlayerId2(puuid).then(data => {
      setPlayerId(data);
      if (data) {
        setIsLoaded(true);
      }
    });
  }, []);

  return (
    <>
      <VStack spacing={8}>
        <Heading>Profile</Heading>
        <Card maxW="sm">
          {!isLoaded ? (
            'Chargement...'
          ) : (
            <>
              <CardBody>
                <Wrap
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <WrapItem>
                    <Avatar
                      size="2xl"
                      name={playerId.name}
                      src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/${playerId.profileIconId}.png`}
                    />
                  </WrapItem>
                </Wrap>
                <Stack mt="6" spacing="3">
                  <Heading size="md">{playerId.name}</Heading>
                  <Text>Summoner level :{playerId.summonerLevel}</Text>
                </Stack>
              </CardBody>
              <Divider />
            </>
          )}
        </Card>
      </VStack>
    </>
  );
}
