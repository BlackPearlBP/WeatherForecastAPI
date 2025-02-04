import React from "react";
import * as S from "./styles"
import Navbar from "../../components/navbar/main";
import MiddleContainer from "../../containers/middle-container/main";
import Menu from "../../components/menu/main";

const MainContainer = () => { 
    return(
        <S.Background>
            <Navbar/>
            <MiddleContainer/>
            <Menu/>
        </S.Background>
    )
}

export default MainContainer