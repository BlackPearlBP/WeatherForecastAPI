import React, { useState } from "react";
import * as S from "./styles";

const Menu = ({ onSelectForecastType }) => {
    const [activeIndex, setActiveIndex] = useState(0); 

    const handleItemClick = (index) => {
        setActiveIndex(index);
        const forecastType = index === 0 ? "hourly" : "daily";
        console.log("Tipo de previsão selecionado no Menu:", forecastType);
        onSelectForecastType(forecastType);
    };

    return (
        <S.Background>
            {["Today", "Week"].map((item, index) => (
                <S.MenuItem
                    key={index}
                    active={activeIndex === index}
                    onClick={() => handleItemClick(index)}
                >
                    {item}
                </S.MenuItem>
            ))}
        </S.Background>
    );
};

export default Menu;
