import React, { useState } from "react";
import * as S from "./styles";
import Navbar from "../../components/navbar/main";
import MiddleContainer from "../../containers/middle-container/main";
import BottomContainer from "../bottom-container/main";

const MainContainer = () => {
    const [forecastData, setForecastData] = useState(null);

    const handleSearch = (data) => {
        setForecastData(data);
    };

    return (
        <S.Background>
            <Navbar onSearch={handleSearch} />
            <MiddleContainer forecastData={forecastData} />
            <BottomContainer dailyForecast={forecastData?.forecast?.daily || null} />
            </S.Background>
    );
};

export default MainContainer;
