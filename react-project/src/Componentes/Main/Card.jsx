import React from "react";
import { Box, Image, Grid, GridItem, Text } from "@chakra-ui/react";
import bulbasaur from "../../../public/Imagenes/bulbasaur.png";

function Card() {
  return (
    <Grid
      my="30px"
      mx="auto"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(3, 1fr)"
      h="50vh"
      w="95vw"
      gap={3}
    >
      <GridItem
        borderRadius="10px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bgColor="#74C848"
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
          <Text h="20%" textAlign="right">
            #001
          </Text>
          <Image h="80%" src={bulbasaur} />
        </Box>
        <Text h="20%" color="white">
          Bulbasaur
        </Text>
      </GridItem>
      <GridItem
        borderRadius="10px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bgColor="#a78723"
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
          <Text h="20%" textAlign="right">
            #001
          </Text>
          <Image h="80%" src={bulbasaur} />
        </Box>
        <Text h="20%" color="white">
          Bulbasaur
        </Text>
      </GridItem>
      <GridItem
        borderRadius="10px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bgColor="#74C848"
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
          <Text h="20%" textAlign="right">
            #001
          </Text>
          <Image h="80%" src={bulbasaur} />
        </Box>
        <Text h="20%" color="white">
          Bulbasaur
        </Text>
      </GridItem>
    </Grid>
  );
}

export default Card;
