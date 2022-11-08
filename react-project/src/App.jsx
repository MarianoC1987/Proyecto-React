import Header from "./Componentes/Header";
import Main from "./Componentes/Main/MainComponent";
import { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";

function App() {
  const [sort, setSort] = useState(true);
  const [buscar, setBuscar] = useState("");
  const [sortbtn, setSortbtn] = useState("123");
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/pokemon", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (e) => {
    setBuscar(e.target.value);
  };
  const handleClick = () => {
    setSort(!sort);

    sort
      ? pokemon.sort((a, b) => (a.nombre > b.nombre ? 1 : -1))
      : pokemon.sort((a, b) => (a.id > b.id ? 1 : -1));

    sort ? setSortbtn("abc") : setSortbtn("123");
  };

  return (
    <>
      <Image
        position="fixed"
        objectFit="cover"
        w="100vw"
        h="100vh"
        src="./Imagenes/bosque5.jpg"
        zIndex="-20"
      ></Image>
      <Header
        handleChange={handleChange}
        handleClick={handleClick}
        sortbtn={sortbtn}
      />
      <Main buscar={buscar} pokemon={pokemon} />
    </>
  );
}

export default App;
