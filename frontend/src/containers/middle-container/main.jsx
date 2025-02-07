import React from "react";
import * as S from "./styles";

const MiddleContainer = ({ forecastData }) => {
    if (!forecastData) {
        return (
            <S.Background>
                <p>Carregando...</p>
            </S.Background>
        );
    }

    const { city, country, temperature_now } = forecastData;

    return (
        <S.Background>
            <h1>{temperature_now}°C</h1>
            <p>{city}, {country}</p>
        </S.Background>
    );
};

export default MiddleContainer;
