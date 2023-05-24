import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import * as S from "./FilmesStyled"
export default function Filmes() {
  const [filmes, setFilmes] = useState([]);

  const getApi = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-Br&page=2"
      )
      .then((response) => {
        setFilmes(response.data.results);
      });
  };
  useEffect(() => {
    getApi();
  }, []);

  
  return (
    <S.FilmesSection>
      <section>
      {filmes.map((item) => (
        
        <S.CardFilmes>
          <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt={item.title}/>
          <h4>{item.title}</h4>
          <p>{item.release_date}</p>
        </S.CardFilmes>
      ))}
      </section>
    </S.FilmesSection>
  )
}