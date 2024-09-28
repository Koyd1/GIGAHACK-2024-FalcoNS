"use client";
import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader/Preloader.jsx";
import Header from "@/app/components/Header/Header"; // Проверь путь к компоненту

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
      {!isLoading && (
        <div>
          <Header />
        </div>
      )}
    </div>
  );
};

export default App;
