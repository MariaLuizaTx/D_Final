import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import axios from "axios";

export default function Carrossel() {
  const [filmes, setFilmes] = useState([]);

  const getApi = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-Br&page=1"
      )
      .then((response) => {
        setFilmes(response.data.results);
      });
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <section>
      <Carousel itemsToShow={4} itemPadding={[10, 50]}>
        {filmes.map((item) => (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt=""
              style={{width:"85%"}}
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
}
