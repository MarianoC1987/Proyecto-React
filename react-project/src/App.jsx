import Header from "./Componentes/Header";
import Main from "./Componentes/Main/MainComponent";
import { useState } from "react";
import pokemon from "./datos";
import Body from "./Componentes/Imagenfondo";

function App() {
  const [sort, setSort] = useState(true);
  const [buscar, setBuscar] = useState("");
  const [boton, setBoton] = useState();
  const handleChange = (e) => {
    setBuscar(e.target.value);
  };
  const handleClick = () => {
    setSort(!sort);
  };
  console.log(sort);
  const arreglo = pokemon.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));
  // if (sort === true) pokemon.sort((a, b) => (a.nombre > b.nombre ? -1 : 1));
  // else {
  //   pokemon.sort((a, b) => a.id - b.id);
  // }

  console.log(arreglo);

  return (
    <>
      <Body />
      <Header handleChange={handleChange} handleClick={handleClick} />
      <Main buscar={buscar} arreglo={arreglo} />
    </>
  );
}

export default App;
