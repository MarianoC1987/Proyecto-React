import { Grid } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";
import pokemon from "../../datos";
function Main() {
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
      {pokemon.map((pokemon) => (
        <Card
          key={pokemon.id}
          nombre={pokemon.nombre}
          id={pokemon.id}
          imagen={pokemon.imagen}
          color={pokemon.color}
        />
      ))}
    </Grid>
  );
}

export default Main;
