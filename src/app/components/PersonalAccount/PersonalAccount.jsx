import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import PersonalCard from "../PersonalCard/PersonalCard";
import MyAnalyses from "../MyAnalyses/MyAnalyses";
import BookAppointment from "../BookAppointment/BookAppointment";
import "./personalAccount.css"
import SymptomsChecker from "../SymptomsChecker/SymptomsChecker";

function PersonalAccount() {
    const [activePage, setActivePage] = useState('personalCard');  // Страница по умолчанию

    const renderPage = () => {
        switch (activePage) {
            case 'personalCard':
                return <PersonalCard />;
            case 'myAnalyses':
                return <MyAnalyses />;
            case 'bookAppointment':
                return <BookAppointment />;
            case 'symptomsChecker':
                return <SymptomsChecker />;

            default:
                return <PersonalCard />;
        }
    };

    return (
        <>
            <NavBar setActivePage={setActivePage} />
            {renderPage()}
        </>
    );
}

export default PersonalAccount;
