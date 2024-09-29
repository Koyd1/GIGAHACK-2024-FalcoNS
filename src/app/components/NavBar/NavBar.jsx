import './navBar.css';
import DashboardBut from "../DashboardBut/DashboardBut";
import {IoIosArrowBack} from "react-icons/io";
import React from "react";

function NavBar({ setActivePage }) {
    return (
        <div className="main">
            <button className={"backBut"}><IoIosArrowBack/></button>
            <img src="img/invitro.png" alt="logo"/>
            <DashboardBut setActivePage={setActivePage}/>
        </div>
    );

}

export default NavBar;
