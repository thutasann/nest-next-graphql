import { useRadio, Box, UseRadioProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface Props extends UseRadioProps {
  children: ReactNode;
}

const RadioCard = (props: Props) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        fontWeight="semibold"
        boxShadow="md"
        _checked={{
          bg: '#0cdfff',
          color: '#16181D',
          border: '1px solid #0cdfff',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default RadioCard;
