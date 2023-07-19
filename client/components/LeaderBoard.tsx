'use client';

import { DonationsQuery } from '@/queries';
import { IDoantion } from '@/types';
import {
  Box,
  Radio,
  RadioGroup,
  Spinner,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useQuery } from 'urql';
import BoardItem from './BoardItem';

interface DoantionQueryProps {
  donations: IDoantion[];
}

function LeaderBoard() {
  const [field, setOrderByField] = useState('createdAt');

  const [{ data, fetching, error }] = useQuery<DoantionQueryProps>({
    query: DonationsQuery,
    variables: {
      orderBy: {
        field,
        direction: 'desc',
      },
    },
  });

  if (error) return <h2 className="font-bold">Something went wrong!</h2>;

  return (
    <Box
      mb="100px"
      className="flex border border-grey rounded-md w-full max-w-[800px] mx-3  flex-col items-center justify-center mt-5 p-5"
    >
      <RadioGroup
        mb={4}
        color="#F6F8Fd"
        onChange={setOrderByField}
        value={field}
      >
        <Stack direction="row">
          <Radio colorScheme="teal" value="createdAt">
            Most Recent
          </Radio>
          <Radio value="count">Most Pounds</Radio>
        </Stack>
      </RadioGroup>

      {fetching ? (
        <Spinner />
      ) : (
        <VStack spacing={2} width="100%">
          {data?.donations.map((donation) => (
            <BoardItem key={donation.id} donation={donation} />
          ))}
        </VStack>
      )}
    </Box>
  );
}

export default LeaderBoard;
