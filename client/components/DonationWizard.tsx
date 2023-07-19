/* eslint-disable react/jsx-key */
'use client';

import { CreateDonation } from '@/queries';
import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useMutation } from 'urql';
import CountSelection from './CountSelection';
import DonationDetailForm from './DonationDetailForm';

function DonationWizard({ onClose }: { onClose: () => void }) {
  const [donationResult, createDonation] = useMutation(CreateDonation);
  const [step, setStep] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [donationDetails, setDonationDetails] = useState({
    count: 20,
  });

  const next = (values: any) => {
    const mergedDetails = { ...donationDetails, ...values };
    if (step === pages.length - 1) {
      submitDonation(mergedDetails);
    } else {
      setStep(step + 1);
      setDonationDetails(mergedDetails);
      console.log('donationDetail', donationDetails);
    }
  };

  const prev = () => {
    setStep(step - 1);
  };

  const submitDonation = async (mergedDetails: any) => {
    await createDonation({
      createDonationInput: mergedDetails,
    });
    setShowConfirmation(true);
    setTimeout(() => {
      onClose();
    }, 3000);
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
      {showConfirmation ? (
        <div className="border flex items-center mb-[20px] justify-center py-7 rounded-md">
          <h1 className="text-center font-bold ">
            Thanks you for your Donation of <br />
            <span className="text-3xl">
              £ {donationResult.data?.createDonation?.count}
            </span>
          </h1>
        </div>
      ) : (
        pages[step]
      )}
    </Box>
  );
}

export default DonationWizard;
