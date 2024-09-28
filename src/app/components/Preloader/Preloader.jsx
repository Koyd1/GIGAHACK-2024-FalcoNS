import React from "react";
import "./Preloader.css"; // Импортируй файл стилей

const Preloader = ({ isLoading }) => {
  return (
    <div className={`preloader ${isLoading ? "" : "invisible"}`}>
      <div className="loader">
        <div className="loader-outter"></div>
        <div className="loader-inner"></div>
        <div className="indicator">
          <svg width="16px" height="12px">
            <polyline
              id="back"
              points="1 6 4 6 6 11 10 1 12 6 15 6"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              id="front"
              points="1 6 4 6 6 11 10 1 12 6 15 6"
              fill="none"
              stroke="#1A76D1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-dash"
              strokeDasharray="12,36"
              strokeDashoffset="48"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
