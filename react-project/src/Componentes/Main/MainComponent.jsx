import { Grid } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";
import pokemon from "../../datos";
function Main(props) {
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
      {pokemon
        .filter((poke) =>
          poke.nombre.toLowerCase().includes(props.buscar.toLowerCase())
        )
        .map((pokemons) => (
          <Card
            key={pokemons.id}
            nombre={pokemons.nombre}
            id={pokemons.id}
            imagen={pokemons.imagen}
            color={pokemons.color}
          />
        ))}
    </Grid>
  );
}

export default Main;
