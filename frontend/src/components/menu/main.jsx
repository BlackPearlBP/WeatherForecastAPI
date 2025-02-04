import React, { useState } from "react";
import * as S from "./styles";

const Menu = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex(index);
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
