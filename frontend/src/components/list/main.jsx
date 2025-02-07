import React from "react";
import * as S from "./styles";

const List = ({ forecastData, forecastType }) => {
    if (!forecastData) {
        return <S.Card>Carregando...</S.Card>;
    }

    console.log("Dados recebidos no List:", forecastData);

    return (
        <S.Background>
            <S.Card>
                <ul>
                    {forecastType === "daily"
                        ? forecastData.time.map((date, index) => (
                            <li key={date}>
                                <strong>{date}</strong>: {forecastData.temperature_2m_max[index]}°C | {forecastData.temperature_2m_min[index]}°C
                            </li>
                        ))
                        : forecastData.time.map((time, index) => (
                            <li key={time}>
                                <strong>{time}</strong>: {forecastData.temperature_2m[index]}°C
                            </li>
                        ))}
                </ul>
            </S.Card>
        </S.Background>
    );
};

export default List;
