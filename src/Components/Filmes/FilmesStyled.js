import styled from "styled-components";

export const FilmesSection = styled.section`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;

    border: 3px solid red;
    section{
        height: 220vh;
        width: 95%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        border: 3px solid red;
    }
`;

export const CardFilmes = styled.div`
    height: 50vh;
    width: 16vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid greenyellow;
    img{
        height: 40vh;
        width: 13vw;
    }
    h4{
        text-align: center;
        color: white;
        font-weight: 500;
    }
    p{
        color:white;
        font-weight: 300;
    }
`;