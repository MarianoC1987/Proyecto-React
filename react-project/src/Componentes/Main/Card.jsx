import React from "react";
import { Box, Image, Grid, GridItem, Text } from "@chakra-ui/react";
import bulbasaur from "../../../public/Imagenes/bulbasaur.png";
import "./card.css";

function Card({ nombre, id, imagen, color }) {
  return (
    <GridItem
      borderRadius="10px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgColor="#ffffff00"
      flexDirection="column"
    >
      <Box
        border={"6px solid" + color}
        borderRadius="10px"
        h="60%"
        w="95%"
        bgColor="#000000a0"
        direction="column"
        justify="space-between"
        align="center"
        my="0.5"
      >
        <Text h="20%" textAlign="right" color={color}>
          {"#" + id}
        </Text>
        <Image h="80%" src={imagen} className="boxshadow" />
      </Box>
      <Text
        h="100%"
        w="95%"
        color="white"
        bgColor={color}
        borderRadius="0 0 10px 10px"
        mt="-10px"
        align="center"
      >
        {nombre}
      </Text>
    </GridItem>
  );
}
// cambios raros para arreglar el fondo de las cards
export default Card;
