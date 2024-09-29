"use client";
import React, { useState, useEffect } from "react";
// import Preloader from "./components/Preloader/Preloader.jsx";
import PersonalAccount from "@/app/components/PersonalAccount/PersonalAccount";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/*<Preloader isLoading={isLoading} />*/}

      {!isLoading && (
        <div>
          <PersonalAccount />
        </div>
      )}
    </div>
  );
};

export default App;
