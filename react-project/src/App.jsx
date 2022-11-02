import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <header>
        <Flex justify="center" align="center">
          <Image src={"../Imagenes/Pokeball.png"}></Image>
          <Text fontSize="3em">Pokedex</Text>
        </Flex>
      </header>
    </>
  );
}

export default App;
