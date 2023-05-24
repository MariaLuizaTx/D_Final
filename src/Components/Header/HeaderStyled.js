import styled from "styled-components";

export const HeaderS = styled.header`
  position: fixed;
  background-color: rgb(108, 122, 137 /1);
  backdrop-filter: blur(15px);
  height: 12vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    margin-left: 15px;
  }
  nav {
    height: 10vh;
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .filmeSeries {
    height: 10vh;
    width: 25vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
  }

  .filtroLogin {
    height: 10vh;
    width: 15vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    color: white;
  }

  .lupa {
    font-size: 1.5em;
  }
`;

export const ButtonSeries = styled.button`
  background: transparent;
  border-radius: 20px;
  border: none;
  color: white;
  font-size: 1em;
`;

export const ButtonFilmes = styled.button`
  height: 6vh;
  width: 15vh;
  background: #747474;
  box-shadow: 0px 3px 6px #0000007c;
  border-radius: 20px;
  border: none;
  color: white;
  font-size: 1em;
  font-weight: 300;
`;
