import React from "react";
import { Text, Image, Flex, Input, Button } from "@chakra-ui/react";
import Arrow from "../../public/Imagenes/Arrow.svg";

function Header(props) {
  return (
    <>
      <Flex justify="center" px="17%" align="center" w="100%" gap="15px">
        <Image
          src={"../Imagenes/pokebolacolor2.png"}
          boxSize="3.5em"
          my="2"
        ></Image>
        <Image src={"../Imagenes/pokedex.png"} my="1.5"></Image>
      </Flex>
      <Flex justify="space-between" m="auto" align="center" w="95vw">
        <Input
          w="85%"
          variant="filled"
          placeholder="Buscar"
          onChange={props.handleChange}
          color="white"
        ></Input>

        <Button
          onClick={props.handleClick}
          height="40px"
          colorScheme="Black"
          variant="link"
          border="1px "
        >
          {props.sortbtn} <Image src={Arrow} />
        </Button>
      </Flex>
    </>
  );
}

export default Header;
