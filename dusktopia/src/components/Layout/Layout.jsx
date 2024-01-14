// import { Outlet} from "react-router-dom";
import Header from '../Header/Header';
import Faction from '../Faction/Faction';
import Road from '../Road/Road';
import Colobaration from '../Colobaration/Colobaration';
import Questions from '../Questions/Questions';
import React from 'react';
import Team from '../Team/Team';
import Footer from '../Footer/Footer';


function Layout({value ,setValue}) {
    return (
        <>
            <Header />
            <Faction value = {value} setValue = {setValue} />
            {/* <Outlet/> */}
            <Road />
            <Colobaration />
            <Questions />
            <Team/>
            <Footer/>
        </>
    );
}

export default Layout;
