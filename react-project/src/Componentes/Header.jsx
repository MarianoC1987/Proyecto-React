import React from "react";
import { Text, Image, Flex, Input, Button } from "@chakra-ui/react";

function Header() {
  return (
    <>
      <Flex justify="space-evenly" align="center" w="390px">
        <Image src={"../Imagenes/Pokeball.png"} boxSize="5em" my="1.5"></Image>
        <Text fontSize="3em">Pokedex</Text>
      </Flex>
      <Flex justify="space-between" align="center" w="95%">
        <Input></Input>
        <Button colorScheme="teal" variant="link"></Button>
      </Flex>
    </>
  );
}

export default Header;
