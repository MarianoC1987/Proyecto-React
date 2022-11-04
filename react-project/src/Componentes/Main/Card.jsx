import React from "react";
import { Box, Image, Grid, GridItem, Text } from "@chakra-ui/react";
import bulbasaur from "../../../public/Imagenes/bulbasaur.png";

function Card({ nombre, id, imagen, color }) {
  return (
    <GridItem
      borderRadius="10px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgColor={color}
      flexDirection="column"
    >
      <Box
        borderRadius="10px"
        h="60%"
        w="95%"
        bgColor="white"
        direction="column"
        justify="space-between"
        align="center"
        my="0.5"
      >
        <Text h="20%" textAlign="right" color={color}>
          {"#" + id}
        </Text>
        <Image h="80%" src={imagen} />
      </Box>
      <Text h="20%" color="white">
        {nombre}
      </Text>
    </GridItem>
  );
}

export default Card;
