import { useContext, useState } from 'react';
import { 
  FormControl,
  FormLabel,
  Select,
  Button,
  Flex,
 } from '@chakra-ui/react';

export const SearchProfile = () => {
    const [searchRanking, setSearchRanking] = useState([]);

    return(
        <>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
        <FormControl>
                  <FormLabel>Ranking for Iron to Diamond</FormLabel>
                  <Select placeholder='Queue'>
                    <option value='RANKED_SOLO_5x5'>Solo Queue</option>
                    <option value='RANKED_FLEX_SR'>Flex Queue</option>
                  </Select>
                  <Select placeholder='Tier'>
                    <option value='DIAMOND'>Diamond</option>
                    <option value='PLATINUM'>Platinum</option>
                    <option value='GOLD'>Gold</option>
                    <option value='SILVER'>Silver</option>
                    <option value='BRONZE'>Bronze</option>
                    <option value='IRON'>Iron</option>
                  </Select>
                  <Select placeholder='Division'>
                    <option value='I'>I</option>
                    <option value='II'>II</option>
                    <option value='III'>III</option>
                    <option value='IV'>IV</option>
                  </Select>
                  <Button
                    mt={4}
                    colorScheme='teal'
                    type='submit'
                  >
                  Submit
                  </Button>
                </FormControl>
                <FormControl id='ranking_master_form'>
                  <FormLabel>Ranking for Master to Challenger</FormLabel>
                  <Select placeholder='Queue'>
                    <option value='RANKED_SOLO_5x5'>Solo Queue</option>
                    <option value='RANKED_FLEX_SR'>Flex Queue</option>
                  </Select>
                  <Select placeholder='Tier'>
                    <option value='challenger'>Challenger</option>
                    <option value='grandmaster'>Grandmaster</option>
                    <option value='master'>Master</option>
                  </Select>
                  <Button
                    mt={4}
                    colorScheme='teal'
                    type='submit'
                  >
                  Submit
                  </Button>
                </FormControl>
        </Flex>
      </>
    )
}