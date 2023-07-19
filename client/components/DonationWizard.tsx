'use client';

import { Box, Button, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import CountSelection from './CountSelection';
import DonationDetailForm from './DonationDetailForm';

function DonationWizard() {
  const [step, setStep] = useState(0);
  const [donationDetails, setDonationDetails] = useState({
    count: 20,
  });

  const next = (values: any = {}) => {
    const mergedDetails = { ...donationDetails, ...values };
    setDonationDetails(mergedDetails);

    if (step === pages.length - 1) {
      console.log(mergedDetails);
    } else {
      setStep(step + 1);
      setDonationDetails(mergedDetails);
    }
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
    <DonationDetailForm next={next} prev={prev} />,
  ];

  return (
    <Box minW="sm" position="relative">
      {pages[step]}
    </Box>
  );
}

export default DonationWizard;
