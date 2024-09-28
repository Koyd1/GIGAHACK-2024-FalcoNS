import React, { useState } from 'react';
import './dashboardBut.css';
import Menu from "../Menu/Menu";
import { AiOutlineMenu } from "react-icons/ai";

function DashboardBut({ setActivePage }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuItemClick = (page) => {
        setActivePage(page);
        setIsOpen(false);
    };

    return (
        <>
            <button className="but" onClick={toggleMenu}>
                <AiOutlineMenu />
            </button>
            {isOpen && (
                <Menu handleMenuItemClick={handleMenuItemClick} />
            )}
        </>
    );
}

export default DashboardBut;