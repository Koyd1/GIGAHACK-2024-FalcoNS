import React from "react";
import "./Doctors.css";

const DoctorTheme = ({ title, imageUrl, features, buttonText }) => {
  return (
    <div className="blog-theme">
      <h2 className="theme-title">{title}</h2>
      <div className="image-container">
        <img src={imageUrl} alt={title} className="theme-image" />
      </div>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li
            key={index}
            className={feature.included ? "included" : "excluded"}
          >
            {feature.text}
          </li>
        ))}
      </ul>
      <button className="theme-button">{buttonText}</button>
    </div>
  );
};

const DoctorCard = () => {
  const doctorOptions = [
    {
      title: "Cepoi Lilia",
      imageUrl: "/img/doctor1.png", // Путь к изображению
      features: [
        { text: "Plastic Surgeon", included: true },
        { text: "10 Years of Experience", included: true },
      ],
      buttonText: "Learn More",
    },
    {
      title: "Lozovan Mihai",
      imageUrl: "/img/doctor2.png", // Путь к изображению
      features: [
        { text: "Urologist", included: true },
        { text: "5 Years of Experience", included: true },
      ],
      buttonText: "Learn More",
    },
    {
      title: "Popov Alexandr",
      imageUrl: "/img/doctor3.png", // Путь к изображению
      features: [
        { text: "Dermatologist", included: true },
        { text: "20 Years of Experience", included: true },
      ],
      buttonText: "Learn More",
    },
    {
      title: "Mihov Victor",
      imageUrl: "/img/doctor4.png", // Путь к изображению
      features: [
        { text: "Hematologist", included: true },
        { text: "41 Years Of Experience", included: true },
      ],
      buttonText: "Learn More",
    },
  ];

  return (
    <div className="container themes">
      {doctorOptions.map((option, index) => (
        <DoctorTheme key={index} {...option} />
      ))}
    </div>
  );
};

export default DoctorCard;
