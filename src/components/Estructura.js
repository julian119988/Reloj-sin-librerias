import { useState, useEffect } from "react";

let dayArray = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let monthArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function Estructura(props) {
  const [tiemp, setTiempo] = useState("00");

  function tiempo(now) {
    switch (props.ti) {
      case "segundos":
        let segundos = now.getSeconds().toString().padStart(2, "00");
        setTiempo((tiemp) => segundos);
        break;
      case "minutos":
        let minutos = now.getMinutes().toString().padStart(2, "00");
        setTiempo((tiemp) => minutos + ":");
        break;
      case "horas":
        let horas = now.getHours().toString().padStart(2, "00");
        setTiempo((tiemp) => horas + ":");
        break;
      case "dias":
        let dias = dayArray[now.getDay()];
        setTiempo((tiemp) => dias);
        break;
      case "meses":
        let meses = monthArray[now.getMonth()];
        setTiempo((tiemp) => meses);
        break;
      case "anios":
        let anios = now.getFullYear().toString();
        setTiempo((tiemp) => anios);
        break;
      default:
        setTiempo((tiemp) => " ");
        break;
    }
  }
  useEffect(() => {
    var intervalo = setInterval(() => {
      let now = new Date();
      tiempo(now);
    }, 1000);
  }, []);

  return <h1>{tiemp}</h1>;
}
