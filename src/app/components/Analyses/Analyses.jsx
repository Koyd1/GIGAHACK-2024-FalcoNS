import React, { useState } from "react";
import "./Analyses.css";

const Analyses = ({ analyses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const analysesPerPage = 10;

  const indexOfLastAnalysis = currentPage * analysesPerPage;
  const indexOfFirstAnalysis = indexOfLastAnalysis - analysesPerPage;
  const currentAnalyses = analyses.slice(
    indexOfFirstAnalysis,
    indexOfLastAnalysis,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(analyses.length / analysesPerPage);

  return (
    <div className="Features testimonial-page">
      <h2 className="section-title">List of Analyses</h2>
      <div className="row-analyses">
        {currentAnalyses.map((analysis, index) => (
          <div key={index} className="single-features">
            <div className="analysis-content">
              <h3>{analysis.name}</h3>
              <p>{analysis.description}</p>
            </div>
            <button className="book-button">Book Analysis</button>
          </div>
        ))}
      </div>

      {/* Пагинация */}
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Analyses;
