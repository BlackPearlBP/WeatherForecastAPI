import React from "react";
import { format, parseISO } from "date-fns";
import { enUS } from "date-fns/locale";
import * as S from "./styles";

import sunIcon from "../../assets/svg/sol.svg"; 
import cloudIcon from "../../assets/svg/nuvem.svg"; 
import rainIcon from "../../assets/svg/chuva-nuvem.svg"; 
import cloudSunIcon from "../../assets/svg/sol-nuvem.svg";

const getWeatherIcon = (tempMax, precipitationProbability) => {

    if (tempMax >= 30) {
        return <img src={sunIcon} alt="Sunny" width="50" />;
    }
    if (tempMax < 20) {
        return <img src={cloudIcon} alt="Cloudy" width="50" />;
    }
    
    if (precipitationProbability > 50) {
        return <img src={rainIcon} alt="Rainy" width="50" />;
    }
    
    return <img src={cloudSunIcon} alt="Cloudy with Sun" width="50" />;
};

const List = ({ forecastData }) => {

    return (
        <S.Background>
            {forecastData?.time?.map((date, index) => {
                const formattedDate = format(parseISO(date), "EEEE", { locale: enUS });
                const tempMax = forecastData.temperature_2m_max?.[index];
                const tempMin = forecastData.temperature_2m_min?.[index];
                const precipitationProbability = forecastData.precipitation_probability_mean?.[index];

                return (
                    <S.Card key={date}>
                        <h1>{formattedDate}</h1>
    
                        <div>
                            {getWeatherIcon(tempMax, precipitationProbability)}
                        </div>

                        <p>{tempMin}°C</p>
                        

                    </S.Card>
                );
            })}
        </S.Background>
    );
};

export default List;
