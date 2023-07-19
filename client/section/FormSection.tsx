'use client';

import { Button, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import DonationWizard from '@/components/DonationWizard';

function FormSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="mt-3">
      <Button
        onClick={onOpen}
        bgColor="#0cdfff"
        _hover={{
          opacity: '80%',
        }}
      >
        Add
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="3xl"
        allowPinchZoom
      >
        <ModalOverlay background="#232936" />
        <ModalContent p={2} sx={{ backgroundColor: '#16181D' }}>
          <ModalHeader as="header" color="whitesmoke">
            Add new
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <DonationWizard />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default FormSection;
