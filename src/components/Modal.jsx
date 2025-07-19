import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@chakra-ui/react";

const EventModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> Add a new event!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input placeholder="Event name" />
          <Input placeholder="Description" />
          <Input placeholder="Start time" />
          <Input placeholder="End time" />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Save</Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EventModal;
