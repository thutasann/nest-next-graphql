'use client';

import Counter from '@/components/counter';
import { TotalDonationsQuery, TotalUpdatedQuery } from '@/queries';
import React from 'react';
import { useQuery, useSubscription } from 'urql';
import { Spinner } from '@chakra-ui/react';

const handleSubscription = (prev: any, newTotal: any) => {
  return newTotal?.totalUpdated.total;
};

function CounterSection() {
  const [res] = useSubscription(
    {
      query: TotalUpdatedQuery,
    },
    handleSubscription,
  );

  const [{ data, fetching, error }] = useQuery<{ totalDonations: number }>({
    query: TotalDonationsQuery,
  });

  if (fetching) return <Spinner mt={6} />;

  if (error) return <h2 className="font-bold">Something went wrong!</h2>;

  return <Counter from={0} to={res.data || data?.totalDonations!} />;
}

export default CounterSection;
