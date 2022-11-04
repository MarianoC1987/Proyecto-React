import { Grid } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";
import pokemon from "../../datos";
import { Link } from "react-router-dom";

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
          <Link to={`modal/${pokemons.id}`}>
            <Card
              key={pokemons.id}
              nombre={pokemons.nombre}
              id={pokemons.id}
              imagen={pokemons.imagen}
              color={pokemons.color}
            />
          </Link>
        ))}
    </Grid>
  );
}

export default Main;
