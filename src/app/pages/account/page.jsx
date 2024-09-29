"use client";
import React, { useState, useEffect } from "react";
import { getCookie } from "@/app/utils/userLogin";
// import Preloader from "./components/Preloader/Preloader.jsx";
import { redirect } from "next/navigation";
import { logout } from "../../utils/userLogin";
import Cookies from 'js-cookie';

import PersonalAccount from "@/app/components/PersonalAccount/PersonalAccount";
import Preloader from "@/app/components/Preloader/Preloader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  if(!Cookies.get("logged_in", {path: "/pages"})) {
    redirect("/pages/login");
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
      <div>
        <Preloader isLoading={isLoading}/>
        {!isLoading && (
            <div>
              <PersonalAccount/>
            </div>

        )}
        <button className="ml-3" onClick={logout}>Logout</button>
      </div>
  );
};

export default App;
