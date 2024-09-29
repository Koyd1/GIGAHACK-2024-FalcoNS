import React, { useState } from "react";
import Link from "next/link";
import "./styles.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: "Home", link: "/pages/home" },
    { label: "Doctors", link: "/pages/doctors" },
    { label: "Analyses", link: "/pages/analyses" },
    { label: "Challenges", link: "/pages/challenges" },
    { label: "Personal Account", link: "/pages/account" },
  ];

  return (
    <header className="header">
      <div className="header-inner">
        <div className="container">
          <div className="inner">
            <div className="row justify-between items-center">
              {/* Logo */}
              <div className="logo-container flex justify-center">
                <Link href="/">
                  <img
                    src="/img/invitro.png"
                    alt="Logo"
                    className="mt-3.5 w-52"
                  />
                </Link>
              </div>
              <div className="menu-icon mb-4 ml-4" onClick={toggleMenu}>
                <div className={`hamburger ${isOpen ? "open" : ""}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
                <ul>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link href={item.link}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
