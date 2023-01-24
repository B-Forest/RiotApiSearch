import { useContext, useState } from 'react';

const PlayerCard = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem w='100%' h='10'>Summoner Name : </GridItem>
        <GridItem w='100%' h='10'>League Points : </GridItem>
        <GridItem w='100%' h='10'>Win : </GridItem>
        <GridItem w='100%' h='10'>Losses : </GridItem>
        </Grid>
      </CardBody>
    </Card>
  );
};


                