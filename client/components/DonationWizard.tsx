'use client';

import { Box, Button, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import CountSelection from './CountSelection';

function DonationWizard() {
  const [step, setStep] = useState(0);
  const [donationDetails, setDonationDetails] = useState({
    count: 20,
  });

  const next = (values: { count: number } = { count: 0 }) => {
    const mergedDetails = { ...donationDetails, ...values };
    setDonationDetails(mergedDetails);
    setStep(step + 1);
  };

  const prev = () => {
    setStep(step - 1);
  };

  const pages = [
    <CountSelection
      initialCount={donationDetails.count.toString()}
      next={next}
      prev={prev}
    />,
    <div>
      Page 2<button onClick={prev}>prev</button>
    </div>,
  ];

  return (
    <Box minW="sm" position="relative">
      {pages[step]}
    </Box>
  );
}

export default DonationWizard;
