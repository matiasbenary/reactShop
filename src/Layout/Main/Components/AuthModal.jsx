import { useEffect } from "react";

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import authModal from "../../../shared/authModal";
import Login from "./Login";
import Register from "./Register";

const AuthModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showModal, setShowModal] = useRecoilState(authModal);

  useEffect(() => {
    if (showModal) onOpen();
  }, [showModal, onOpen]);

  useEffect(() => {
    if (!isOpen) setShowModal(false);
  }, [isOpen, setShowModal]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Tabs isFitted variant="line">
            <TabList>
              <Tab>Ingresar</Tab>
              <Tab>Registrate</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Login onClose={onClose} />
              </TabPanel>
              <TabPanel>
                <Register onClose={onClose} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default AuthModal;
