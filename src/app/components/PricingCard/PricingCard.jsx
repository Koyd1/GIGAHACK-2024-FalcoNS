import React from "react";
import "./PricingCard.css";

const PricingCard = ({ title, price, features, buttonText }) => {
  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <p className="price">${price}</p>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li
            key={index}
            style={{
              ...feature,
              textDecoration: feature.included ? "none" : "line-through",
              color: feature.included ? "#008f91" : "#c4c4c4",
            }}
          >
            {feature.text}
          </li>
        ))}
      </ul>
      <button className="button">{buttonText}</button>
    </div>
  );
};

const Pricing = () => {
  const pricingOptions = [
    {
      title: "Plastic Surgery",
      price: 199,
      features: [
        { text: "Lorem ipsum dolor sit", included: true },
        { text: "Cubitur sollicitudin fentum", included: true },
        { text: "Nullam interdum enim", included: false },
        { text: "Donec ultricies metus", included: false },
        { text: "Pellentesque eget nibh", included: false },
      ],
      buttonText: "Book Now",
    },
    {
      title: "Plastic Surgery",
      price: 199,
      features: [
        { text: "Lorem ipsum dolor sit", included: true },
        { text: "Cubitur sollicitudin fentum", included: true },
        { text: "Nullam interdum enim", included: false },
        { text: "Donec ultricies metus", included: false },
        { text: "Pellentesque eget nibh", included: false },
      ],
      buttonText: "Book Now",
    },
  ];

  return (
    <div className="container box">
      {pricingOptions.map((option, index) => (
        <PricingCard key={index} {...option} />
      ))}
    </div>
  );
};

export default Pricing;
