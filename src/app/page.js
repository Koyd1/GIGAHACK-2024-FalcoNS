"use client";
import React, { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import Preloader from "@/app/components/Preloader/Preloader";

const App = () => {
  const [isLoadings, setIsLoading] = useState(true);

  redirect("/pages/home");

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
