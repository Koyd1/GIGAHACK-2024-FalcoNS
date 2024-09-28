"use client";
import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader/Preloader.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0); // Задержка 3 секунды для загрузки

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Preloader isLoading={isLoading} />
      {!isLoading && <div></div>}
    </div>
  );
};

export default App;
