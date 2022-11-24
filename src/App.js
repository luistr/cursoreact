import React from "react";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import "./style.css";

let saludito = "Buenas ...como va, excelente curso, seguimos aprendiendo.";

export default function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting = {saludito} />
    </div>
  );
};
