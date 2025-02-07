import React from "react";
import List from "../../components/list/main";

const BottomContainer = ({ dailyForecast, hourlyForecast, forecastType }) => {

    const forecastData = forecastType === "daily" ? dailyForecast : hourlyForecast;

    return (
        <div>
            {forecastData ? (
                <List forecastData={forecastData} forecastType={forecastType} />
            ) : (
                <p>Carregando previsões...</p>
            )}
        </div>
    );
};

export default BottomContainer;
