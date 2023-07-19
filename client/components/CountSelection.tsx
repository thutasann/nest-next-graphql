'use client';

import {
  Button,
  NumberInput,
  NumberInputField,
  useRadioGroup,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import RadioCard from './RadioCard';

const options = ['5', '20', '50', '100'];

interface ICountSelection {
  initialCount: string;
  next: (values: { count: number }) => void;
  prev: () => void;
}

function CountSelection({ initialCount, next, prev }: ICountSelection) {
  const [pounds, setPounds] = useState(initialCount);
  const [customAmount, setCustomAmount] = useState(
    '' + (options.includes(pounds) ? '' : pounds),
  );

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'pounds',
    value: pounds.toString(),
    onChange: (nextValue) => {
      setCustomAmount('');
      setPounds(nextValue);
    },
  });

  const group = getRootProps();

  const nextStep = () => {
    next({
      count: Number(pounds),
    });
  };

  const prevStep = () => {
    prev();
  };

  return (
    <div className="form">
      <div {...group} className="mb-3 grid grid-cols-2 gap-2 ">
        {options?.map((value) => {
          const radio = getRadioProps({ value, enterKeyHint: '' });
          return (
            <RadioCard key={value} {...radio}>
              {value} £
            </RadioCard>
          );
        })}
      </div>

      <NumberInput
        onFocus={() => setPounds('0')}
        onChange={(value) => {
          setPounds(value);
          setCustomAmount(value);
        }}
        value={customAmount}
      >
        <NumberInputField
          outline="none"
          _focus={{
            border: '1px solid #0cdfff',
          }}
          height="12"
          placeholder="Other amount"
        />
      </NumberInput>

      <hr className="my-4 border border-grey" />

      <VStack spacing={2}>
        <Button
          w="100%"
          backgroundColor="#0cdfff"
          _hover={{
            opacity: '80%',
          }}
          size="lg"
          borderRadius="full"
          onClick={nextStep}
        >
          Next
        </Button>

        <Button
          w="100%"
          backgroundColor="#232936"
          color="whitesmoke"
          _hover={{
            opacity: '80%',
          }}
          size="lg"
          borderRadius="full"
          onClick={prevStep}
        >
          Previous
        </Button>
      </VStack>
    </div>
  );
}

export default CountSelection;
