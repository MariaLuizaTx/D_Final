import React from "react";
import * as S from "./HeaderStyled";
import logo from "../Assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  return (
    <S.HeaderS>
      <img src={logo} alt="" />
      <nav>
        <ul className="filmeSeries">
          <li>
            <S.ButtonSeries>Series</S.ButtonSeries>
          </li>
          <li>
            <S.ButtonFilmes>Filmes</S.ButtonFilmes>
          </li>
        </ul>

        <ul className="filtroLogin">
          <li className="lupa">
            <AiOutlineSearch />
          </li>
          <li>Filtro</li>
          <li>Login</li>
        </ul>
      </nav>
    </S.HeaderS>
  );
}
