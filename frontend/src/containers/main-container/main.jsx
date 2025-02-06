import React, {useState} from "react";
import * as S from "./styles"
import Navbar from "../../components/navbar/main";
import MiddleContainer from "../../containers/middle-container/main";
import Menu from "../../components/menu/main";
import BottomContainer from "../bottom-container/main";

const MainContainer = () => { 
    const [forecastData, setForecastData] = useState(null);

    const handleSearch = (data) => {
        console.log("Dados recebidos no MainContainer:", data); 
        setForecastData(data);
    };
    return(
        <S.Background>
            <Navbar onSearch={handleSearch}/>
            <MiddleContainer  forecastData={forecastData}/>
            <Menu/>
            <BottomContainer/>
        </S.Background>
    )
}

export default MainContainer