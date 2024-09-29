"use client";
import React, { useState, useEffect } from "react";
// import Preloader from "./components/Preloader/Preloader.jsx";
import Header from "@/app/components/Header/Header";
import FeaturesSection from "@/app/components/FeaturesSection/FeaturesSection";
import FunFacts from "@/app/components/FunFacts/FunFacts";
import PricingCard from "@/app/components/PricingCard/PricingCard";

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
          <Header />
          <FeaturesSection />
          <FunFacts />
          <PricingCard />
        </div>
      )}
    </div>
  );
};

export default App;
