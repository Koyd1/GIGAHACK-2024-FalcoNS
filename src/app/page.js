"use client";
import React, { useState, useEffect } from "react";
import Preloader from "@/app/components/Preloader/Preloader";
import Challenges from "@/app/components/Challenges/Challenges";
import Header from "@/app/components/Header/Header";
import { redirect } from "next/navigation";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
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
