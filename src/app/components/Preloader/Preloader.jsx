import React from "react";
import "./preloader.css"; // Импортируй файл стилей

const Preloader = ({ isLoading }) => {
  return (
    <div className={`preloader ${isLoading ? "" : "invisible"}`}>
      <div className="loader">
        <div className="loader-outter"></div>
        <div className="loader-inner"></div>
        <div className="indicator">
          <svg width="16px" height="12px"></svg>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
