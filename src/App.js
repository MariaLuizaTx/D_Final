import React from "react";
import HeaderP from "./Components/Header/HeaderP";
import MainP from "./Components/Main/MainP";
import Carousel from "./Components/Carrossel/CarrosselP.js";
import FilmeP from "./Components/Filmes/FilmesP"
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Open Sans', sans-serif;
    }
  `;

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <HeaderP />
      <MainP />
      <Carousel />
      <FilmeP />
    </div>
  );
}