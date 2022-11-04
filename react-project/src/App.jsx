import Header from "./Componentes/Header";
import Main from "./Componentes/Main/MainComponent";
import { useState } from "react";

function App() {
  const [buscar, setBuscar] = useState("");
  const handleChange = (e) => {
    setBuscar(e.target.value);
  };
  return (
    <>
      <Header handleChange={handleChange} />
      <Main buscar={buscar} />
    </>
  );
}

export default App;
