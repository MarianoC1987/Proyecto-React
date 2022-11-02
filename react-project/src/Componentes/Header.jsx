import React from "react";
import { Text, Image, Flex, Input, Button } from "@chakra-ui/react";

function Header() {
  return (
    <>
      <Flex justify="center" align="center" w="390px">
        <Image src={"../Imagenes/Pokeball.png"} boxSize="100px"></Image>
        <Text fontSize="3em">Pokedex</Text>
      </Flex>
      <Flex>
        <Input></Input>
        <Button colorScheme="teal" variant="link"></Button>
      </Flex>
    </>
  );
}

export default Header;
