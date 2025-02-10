import React from "react";
import List from "../../components/list/main";
import * as S from "./styles"

const BottomContainer = ({ dailyForecast }) => {
    console.log("Dados recebidos no BottomContainer:", dailyForecast);

    return (
        <S.Background>
                <List forecastData={dailyForecast} forecastType="daily" />
        </S.Background>
    );
};


export default BottomContainer;
