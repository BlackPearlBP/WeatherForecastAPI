import React, { useState } from "react";
import axios from "axios";
import * as S from "./styles";

const Search = ({ onSearch }) => {
    const [city, setCity] = useState("");

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSearch = async () => {
        if (city) {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/forecast/", {
                    params: {
                        city,
                        country: "Brazil",
                        type: "daily",
                    },
                });
                onSearch(response.data);  
            } catch (error) {
                console.error("Erro na requisição:", error);
            }
        }
    };

    return (
        <S.InputWrapper>
            <S.StyledInput
                type="text"
                value={city}
                onChange={handleInputChange}
                placeholder="Search"
            />
            <S.SearchIcon onClick={handleSearch} />
        </S.InputWrapper>
    );
};

export default Search;
