import React from "react";
import "./Challenges.css";

const Challenges = ({ title, price, features, buttonText }) => {
  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <p className="price">{price}</p>
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

const BlogCard = () => {
  const BlogOptions = [
    {
      title: "10000 Steps",
      price: "-25%",
      features: [
        { text: "in 24 hours", included: true },
        { text: "Until 09/09/2024", included: false },
      ],
      buttonText: "See More",
    },
    {
      title: "2,5l Of Water",
      price: "GIFT",
      features: [
        { text: "For a week", included: true },
        { text: "Until 10/10/2024", included: true },
      ],

      buttonText: "See More",
    },
  ];

  return (
    <div className="container box">
      {BlogOptions.map((option, index) => (
        <Challenges key={index} {...option} />
      ))}
    </div>
  );
};

export default BlogCard;
