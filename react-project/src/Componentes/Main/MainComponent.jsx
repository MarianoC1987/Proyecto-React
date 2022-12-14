import { Grid } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";
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
      {props.pokemon
        .filter((poke) =>
          poke.nombre.toLowerCase().includes(props.buscar.toLowerCase())
        )
        .map((pokemons) => (
          <Link key={pokemons.id} to={`modal/${pokemons.id}`}>
            <Card
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
