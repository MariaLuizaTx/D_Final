import styled from "styled-components";
import fundo from "../Assets/fundo.png";

export const FundoSection = styled.section`
  height: 110vh;
  width: 100%;
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  z-index: -1;
`;

export const gradientDiv = styled.div`
  height: 15vh;
  width: 100%;
  background: transparent linear-gradient(180deg, #00000000 0%, #000000 100%);
  z-index: 0;
  position: absolute;
  top: 43vw;
`;

export const SectionUm = styled.section`
  height: 105vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  color: white;
  z-index: 1;
`;

export const TitiloDiv = styled.div`
  height: 16vh;
  width: 43vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-weight: bold;
    font-size: 2.5em;
  }

  p {
    font-weight: 300;
  }
`;

export const AvaliacaoDiv = styled.div`
  height: 5vh;
  width: 43vw;
  display: flex;
  flex-direction: row;
  align-items: end;

  button {
    background: transparent;
    border: none;
    padding-right: 7px;
  }

  h2 {
    font-weight: 400;
  }

  h4 {
    font-weight: 300;
  }
`;

export const SinopseDiv = styled.div`
  height: 25vh;
  width: 43vw;
  font-weight: 300;
`;

export const ButtonAssistir = styled.button`
  height: 7vh;
  width: 15vw;
  color: white;
  font-size: 1em;
  border-radius: 20px;
  border: none;
  background-color: #d53a00;
  margin-right: 15px;
  margin-top: 5px;
`;

export const ButtonTrailer = styled.button`
  height: 7vh;
  width: 10vw;
  color: white;
  font-size: 1em;
  border-radius: 20px;
  border: none;
  background-color: #717171;
  margin-top: 5px;
`;
