import React, { useState } from "react";
import * as S from "./styles";
import Navbar from "../../components/navbar/main";
import MiddleContainer from "../../containers/middle-container/main";
import Menu from "../../components/menu/main";
import BottomContainer from "../bottom-container/main";

const MainContainer = () => {
    const [forecastData, setForecastData] = useState(null);
    const [forecastType, setForecastType] = useState("hourly");  // Inicia com a previsão por hora
    
    const handleSearch = (data) => {
        console.log("Dados recebidos no MainContainer:", data);
        setForecastData(data);
    };

    const handleForecastTypeChange = (type) => {
        console.log("Tipo de previsão selecionado:", type);
        setForecastType(type); 
    };

    return (
        <S.Background>
            <Navbar onSearch={handleSearch} />
            <MiddleContainer forecastData={forecastData} />
            <Menu onSelectForecastType={handleForecastTypeChange} />
            <BottomContainer
                dailyForecast={forecastData?.forecast?.daily}  
                hourlyForecast={forecastData?.forecast?.hourly} 
                forecastType={forecastType}  
            />
        </S.Background>
    );
};

export default MainContainer;
