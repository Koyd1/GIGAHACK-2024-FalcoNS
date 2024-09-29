"use client";
import React, { useState, useEffect } from "react";
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
      <Preloader isLoading={isLoading} />
      {!isLoading && <div></div>}
    </div>
  );
};

export default App;
