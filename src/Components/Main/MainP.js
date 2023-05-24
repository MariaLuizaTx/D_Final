import React from "react";
import estrela from "../Assets/estrela.png";
import * as S from "./MainStyled";
import { FaPlay } from "react-icons/fa";

export default function Main() {
  return (
    <main>
      <S.FundoSection>
        <S.SectionUm>
          <S.TitiloDiv>
            <h2>Avatar: o Caminho da Água</h2>
            <p>3 hr 23 min | Fantasia, Familia | 2023</p>
          </S.TitiloDiv>

          <S.AvaliacaoDiv>
            <button>
              <img src={estrela} alt="" />
            </button>
            <h2>9,9</h2>
            <h4>/10</h4>
          </S.AvaliacaoDiv>

          <S.SinopseDiv>
            <p>
              Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para
              ficarem juntos. No entanto, eles devem sair de casa e explorar as
              regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve
              travar uma guerra difícil contra os humanos.
            </p>
            <S.ButtonAssistir><FaPlay /> Assistir agora
            </S.ButtonAssistir>
            <S.ButtonTrailer>Trailer</S.ButtonTrailer>
          </S.SinopseDiv>
        </S.SectionUm>
        <S.gradientDiv></S.gradientDiv>
      </S.FundoSection>
    </main>
  );
}
