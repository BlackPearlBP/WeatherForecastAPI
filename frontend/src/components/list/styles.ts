import styled from "styled-components";

export const Card = styled.div`
    background-color: rgba(208, 215, 217, 0.15);
    width: 100%;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    color: #595856;
    padding: 20px;
    
    h1{
        margin-bottom: 20px;
        font-family: "Roboto Regular";
        font-size: 18px;
    }
    
    p{
        margin-top: 20px;
        font-family: "Roboto Regular";
        font-size: 20px;
    }

    div{
    }

`

export const Background = styled.div`
    display: flex;
    flex-direction: row;
    grid-gap: 20px;
    height: 50%;
`