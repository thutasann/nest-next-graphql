'use client';

import { Button, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React from 'react';
import { InputField } from './form/InputField';
import { TextareaField } from './form/TextAreaField';
import * as yup from 'yup';

interface IDonationDetailForm {
  next: (values: any) => void;
  prev: () => void;
}

interface InitialValuesProps {
  displayName: string;
  email: string;
  mobile: string;
  team: string;
  message: string;
}

const initialValues: InitialValuesProps = {
  displayName: '',
  email: '',
  mobile: '',
  team: '',
  message: '',
};

const detailsSchema = yup.object().shape({
  displayName: yup.string().required('Please enter a display name'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter an email'),
  mobile: yup.string().nullable(),
  team: yup.string().nullable(),
  message: yup.string().nullable(),
});

function DonationDetailForm({ next, prev }: IDonationDetailForm) {
  const handleSubmit = (values: InitialValuesProps) => {
    next(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={detailsSchema}
    >
      {(formikProps) => {
        return (
          <Form>
            <div className="form">
              <VStack spacing={4}>
                <InputField
                  label="Diaplay Name"
                  name="displayName"
                  placeholder="Enter Display Name"
                />

                <InputField
                  label="Email Address"
                  name="email"
                  placeholder="Enter Email Address"
                />

                <InputField
                  label="Team"
                  name="team"
                  placeholder="Enter Team Name"
                />

                <TextareaField
                  label="Message"
                  name="message"
                  placeholder="My #Team message is..."
                />
              </VStack>
              <hr className="my-4 border border-grey" />

              <VStack spacing={2}>
                <Button
                  w="100%"
                  backgroundColor="#0cdfff"
                  _hover={{
                    opacity: '80%',
                  }}
                  size="lg"
                  type="submit"
                  borderRadius="full"
                  onClick={() => {}}
                >
                  Submit
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
                  onClick={prev}
                >
                  Previous
                </Button>
              </VStack>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default DonationDetailForm;
