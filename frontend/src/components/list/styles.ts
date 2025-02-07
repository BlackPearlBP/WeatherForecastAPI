import styled from "styled-components";

export const Card = styled.div`
    background-color: rgba(208, 215, 217, 0.15);
    width: 15%;
    height: 100%;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
    color: #595856;

    h1{
        font-family: "Roboto Regular";
        font-size: 18px;
    }
    
    p{
        font-family: "Roboto Regular";
        font-size: 18px;
    }

    span{
        display: flex;
        grid-gap: 10px;
    }

`

export const Background = styled.div`
    display: flex;
    flex-direction: row;
    grid-gap: 20px;
    height: 100%;
`