import styled from "styled-components";

export const Background = styled.div`
    display: flex;
    flex-direction: row;
    grid-gap: 60%;
    padding: 10px;
    width: 100%;
    height: 60px;

    h1{
        font-size: 20px;
        font-family: "Roboto Bold"; 
    }
    p{
        font-size: 18px
        font-family: "Roboto Regular"; 
        color: #595856;
        font-size: 20px;
    }
`

export const ColumnTitle = styled.div`
    display: flex;
    flex-direction: column;
`