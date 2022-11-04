import Header from "./Componentes/Header";
import Main from "./Componentes/Main/MainComponent";
import { useState } from "react";
import pokemon from "./datos";
import Body from "./Componentes/Imagenfondo";

function App() {
  const [sort, setSort] = useState(true);
  const [buscar, setBuscar] = useState("");

  const handleChange = (e) => {
    setBuscar(e.target.value);
  };
  const handleClick = () => {
    setSort(!sort);
    sort
      ? pokemon.sort((a, b) => (a.nombre > b.nombre ? 1 : -1))
      : pokemon.sort((a, b) => (a.id > b.id ? 1 : -1));
  };

  return (
    <>
      <Body />
      <Header handleChange={handleChange} handleClick={handleClick} />
      <Main buscar={buscar} />
    </>
  );
}

export default App;
