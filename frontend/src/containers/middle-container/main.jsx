import React from "react";
import * as S from "./styles";

const MiddleContainer = ({ forecastData }) => {


    if (!forecastData || !forecastData.daily) {
        return (
            <S.Background>
                <p>...</p>
            </S.Background>
        );
    }
    const firstMinTemperature = forecastData.daily.temperature_2m_min[0];  
    return (
        <S.Background>
            <h1>{firstMinTemperature}°C</h1>
        </S.Background>
    );
};

export default MiddleContainer;
