import Boton from "./components/Boton";
import Tiempo from "./components/Tiempo";
import Estructura from "./components/Estructura";
import "./App.css";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  function clickHandler() {
    setToggle((toggle) => !toggle);
  }
  return (
    <span className="tiempo">
      <div className="fecha">
        <Estructura ti="horas"></Estructura>
        <Estructura ti="minutos"></Estructura>
        <Estructura ti="segundos"></Estructura>
      </div>
      <div className="dias">
        <Estructura ti="dias"></Estructura>
        <Estructura ti="espacio"></Estructura>
        <Estructura ti="meses"></Estructura>
        <Estructura ti="espacio"></Estructura>
        <Estructura ti="anios"></Estructura>
      </div>
    </span>
  );
}

export default App;
