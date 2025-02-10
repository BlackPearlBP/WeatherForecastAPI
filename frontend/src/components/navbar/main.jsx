import React from "react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import * as S from "./styles";
import Search from "../search/main";

const Navbar = ({ onSearch }) => {

    const currentDate = format(new Date(), "EEEE dd, MMMM yyyy", { locale: enUS });

    return (
        <S.Background>
            <S.ColumnTitle>
                <h1>Weather Forecast</h1>
                <p>{currentDate}</p> 
            </S.ColumnTitle>
            <Search onSearch={onSearch} />
        </S.Background>
    );
};

export default Navbar;
