import styled from "styled-components";

export const Background = styled.div`
    display: flex;
    flex-direction: row;
    grid-gap: 60%;
    padding: 10px;
    width: 100%;
    height: 60px;

    h1{
        font-family: "Roboto Bold"; 
        font-size: 18px;
    }
    p{
        font-family: "Roboto Regular"; 
        font-size: 16px;
        color: #595856;
    }
`

export const ColumnTitle = styled.div`
    display: flex;
    flex-direction: column;
`