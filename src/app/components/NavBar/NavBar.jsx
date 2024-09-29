import "./navBar.css";
import DashboardBut from "../DashboardBut/DashboardBut";
import { IoIosArrowBack } from "react-icons/io";
import React from "react";
import Link from "next/link";

function NavBar({ setActivePage }) {
  return (
    <div className="main">
      <Link href="/pages/home">
        <IoIosArrowBack />
      </Link>
      <DashboardBut setActivePage={setActivePage} />
    </div>
  );
}

export default NavBar;
