"use client";
import React, { useState, useEffect } from "react";
// import Preloader from "./components/Preloader/Preloader.jsx";
import Header from "@/app/components/Header/Header";
import Doctors from "@/app/components/Doctors/Doctors";
import Preloader from "@/app/components/Preloader/Preloader";

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
      <div className="mb-10">
        <Header />
        <Doctors />
      </div>
    </div>
  );
};

export default App;
