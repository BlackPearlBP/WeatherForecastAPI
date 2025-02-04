import React from "react";
import * as S from "./styles"
import Navbar from "../../components/navbar/main";
import MiddleContainer from "../../containers/middle-container/main";

const MainContainer = () => { 
    return(
        <S.Background>
            <Navbar/>
            <MiddleContainer/>
        </S.Background>
    )
}

export default MainContainer