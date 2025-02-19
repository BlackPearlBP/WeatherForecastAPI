import React, { useState } from "react";
import axios from "axios";
import * as S from "./styles";

const Search = ({ onSearch }) => {
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSearch = async () => {
        if (!city) return;

        try {
            const geoResponse = await axios.get("https://geocoding-api.open-meteo.com/v1/search", {
                params: { name: city, count: 1 },
            });

            if (geoResponse.data.results && geoResponse.data.results.length > 0) {
                const detectedCountry = geoResponse.data.results[0].country;
                setCountry(detectedCountry);

                console.log("Buscando previsão diária...");

                const response = await axios.get("http://127.0.0.1:8000/api/forecast/", {
                    params: {
                        city,
                        country: detectedCountry,
                        type: "daily", 
                    },
                });

                console.log("Dados da API recebidos:", response.data);
                onSearch(response.data);
            } else {
                console.error("Não foi possível detectar o país");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <S.InputWrapper>
            <S.StyledInput
                type="text"
                value={city}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown} 
                placeholder="Search by City"
            />
            <S.SearchIcon onClick={handleSearch} />
        </S.InputWrapper>
    );
};

export default Search;
