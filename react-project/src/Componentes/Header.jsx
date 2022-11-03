import React from "react";
import { Text, Image, Flex, Input, Button } from "@chakra-ui/react";

function Header(props) {
  return (
    <>
      <Flex justify="flex-start" px="17%" align="center" w="390px" gap="15px">
        <Image src={"../Imagenes/Pokeball.png"} boxSize="3.5em" my="2"></Image>
        <Text fontSize="2.5em">Pokedex</Text>
      </Flex>
      <Flex justify="space-between" m="auto" align="center" w="95vw">
        <Input
          w="85%"
          variant="filled"
          placeholder="Buscar"
          onChange={props.handleChange}
        ></Input>

        <Button height="40px" colorScheme="Black" variant="link" border="1px ">
          ASD
        </Button>
      </Flex>
    </>
  );
}

export default Header;
