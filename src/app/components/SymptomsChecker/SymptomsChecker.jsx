import React, { useState } from "react";
import "./symptomsChecker.css";
// import "../medicalAPIManager";
//  import {getSymptoms} from "../medicalAPIManager";
//
// import {initSession} from "../medicalAPIManager";
// import {acceptTerms} from "../medicalAPIManager";
// import {updateFeature} from "../medicalAPIManager";
// import {get} from "axios";

function SymptomsChecker() {
  let [query, setQuery] = useState("");
  let [selectedSymptoms, setSelectedSymptoms] = useState([]);
  let [suggestions, setSuggestions] = useState([]);

  const symptomOptions = ["hi", "jij", "jpofjoj", "pjpo"];
  // console.log(getSymptoms())
  const tests = ["hi", "jij", "jpofjoj", "pjpo"];

  const filteredSymptoms = symptomOptions.filter((symptom) =>
    symptom.toLowerCase().includes(query.toLowerCase()),
  );

  const addSymptom = (symptom) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
    setQuery("");
  };

  const handleGetSuggestions = () => {
    setSuggestions(tests);
  };

  return (
    <div className="symptomsCheckerContainer">
      <h2>Symptoms Checker</h2>

      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search for a symptom..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {query && (
          <ul className="dropdown">
            {filteredSymptoms.map((symptom, index) => (
              <li key={index} onClick={() => addSymptom(symptom)}>
                {symptom}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="selectedSymptoms">
        <h3>Selected Symptoms:</h3>
        <ul>
          {selectedSymptoms.map((symptom, index) => (
            <li key={index}>{symptom}</li>
          ))}
        </ul>
      </div>

      <button onClick={handleGetSuggestions}>Get Suggestions</button>

      <div className="suggestionsContainer">
        <h3>Suggested Tests:</h3>
        <ul>
          {suggestions.map((test, index) => (
            <li key={index}>{test}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SymptomsChecker;
