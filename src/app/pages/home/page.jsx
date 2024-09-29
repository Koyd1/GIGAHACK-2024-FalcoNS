"use client";
import React, { useState, useEffect } from "react";
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
      {!isLoading && (
        <div className="mb-10">
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
