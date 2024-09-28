import React from "react";
import "./funFacts.css";

const FunFacts = () => {
  const facts = [
    { icon: "icofont-home", count: 1000, label: "Medical Tests" },
    { icon: "icofont-user-alt-3", count: 150, label: "Specialist Doctors" },
    { icon: "icofont-simple-smile", count: 41, label: "Laboratories" },
    { icon: "icofont-table", count: 10, label: "Years of Experience" },
  ];

  return (
    <section id="fun-facts" className="fun-facts section overlay">
      <div className="container">
        <div className="row">
          {facts.map((fact, index) => (
            <div className="col-lg-3 col-md-6 col-12" key={index}>
              <div className="single-fun">
                <i className={fact.icon}></i>
                <div className="content">
                  <span className="counter">{fact.count}</span>
                  <p>{fact.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
