import React, { useState }  from "react";
import * as S from "./styles"
import Search from "../search/main";

const Navbar = ({ onSearch}) => {

    return (
        <S.Background>
            <S.ColumnTitle>
                <h1>Weather Forecast</h1>
                <p>Monday 02, February 2025</p>
            </S.ColumnTitle>
            <Search onSearch={onSearch}/>
        </S.Background>
    )
}

export default Navbar