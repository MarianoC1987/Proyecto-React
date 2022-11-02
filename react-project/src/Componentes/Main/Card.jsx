import React from "react";
import { Box, Badge, Image, Grid, GridItem } from "@chakra-ui/react";

function Card() {
  return (
    <Grid
      my="30px"
      mx="auto"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(3, 1fr)"
      h="80vh"
      w="90vw"
      gap={6}
    >
      <GridItem
        borderRadius="10px"
        display="flex"
        alignItems="flex-end"
        justifyContent="center"
        bg="blue.700"
      >
        <Box borderRadius="10px" m="5px" h="50%" w="99%" bgColor="white"></Box>
      </GridItem>
      <GridItem w="100%" bg="blue.700" />
      <GridItem w="100%" bg="blue.700" />
      <GridItem w="100%" bg="blue.700" />
      <GridItem w="100%" bg="blue.700" />
      <GridItem w="100%" bg="blue.700" />
      <GridItem w="100%" bg="blue.700" />
      <GridItem w="100%" bg="blue.700" />
      <GridItem w="100%" bg="blue.700" />
    </Grid>
  );
}

export default Card;
