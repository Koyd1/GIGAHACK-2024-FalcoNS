"use client";
import React, { useEffect, useState } from "react";
import "./symptomsChecker.css";

import axios from "axios";

function SymptomsChecker() {
  const [query, setQuery] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [symptomOptions, setSymptomOptions] = useState([]);
  const [sessionId, setSessionId] = useState("");
  const [aResults, setAResults] = useState([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch(
          "https://api.endlessmedical.com/v1/dx/GetFeatures",
        );
        const data = await response.json();
        setSymptomOptions(data.data);
        setOptions(data.options || []);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };
    fetchOptions();
  }, []);

  useEffect(() => {
    const fetchOptions2 = async () => {
      try {
        const response = await fetch(
          "https://api.endlessmedical.com/v1/dx/InitSession",
        );
        const data = await response.json();
        setSessionId(data.SessionID);
        setOptions(data.options || []);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };
    fetchOptions2();
  }, []);

  useEffect(() => {
    const acceptTerms = async () => {
      try {
        const response = await axios.post(
          "https://api.endlessmedical.com/v1/dx/AcceptTermsOfUse?SessionID=" +
            sessionId +
            "&passphrase=I%20have%20read%2C%20understood%20and%20I%20accept%20and%20agree%20to%20comply%20with%20the%20Terms%20of%20Use" +
            "%20of%20EndlessMedicalAPI%20and%20Endless%20Medical%20services.%20The%20Terms%20of%20Use%20are%20available%20on%20endlessmedical.com",
        );
        console.log("Ответ с сервера:", response.data);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };
    acceptTerms();
  }, [sessionId]);

  useEffect(() => {
    const updateFeature = async () => {
      for (const symptom of selectedSymptoms) {
        try {
          const response = await axios.post(
            `https://api.endlessmedical.com/v1/dx/UpdateFeature?SessionID=${sessionId}&name=${symptom}&value=1`,
          );

          console.log(
            "Ответ сервера для симптома:",
            symptom,
            ":",
            response.data,
          );
        } catch (error) {
          console.error(
            "Ошибка при загрузке данных для симптома",
            symptom,
            ":",
            error,
          );
        }
      }
    };

    updateFeature();
  }, [sessionId, selectedSymptoms]); // Зависимости useEffect

  const GetYourTests = async () => {
    try {
      const response = await fetch(
        `https://api.endlessmedical.com/v1/dx/GetSuggestedFeatures_Tests?SessionID=${sessionId}&TopDiseasesToTake=5`,
      );
      const data = await response.json();
      setAResults(data.SuggestedFeatures);
      setOptions(data.options || []);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  };

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
    GetYourTests();
  };

  const handleResetSuggestions = () => {
    setSelectedSymptoms([]);
    setAResults([]);
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

      <div className={"butBox"}>
        <button onClick={handleGetSuggestions}>Get Suggestions</button>
        <button onClick={handleResetSuggestions} className="ml-10 bg-red-500">
          Reset Symptoms
        </button>
      </div>


      {/*<div className="suggestionsContainer">*/}
      {/*  <h3>Suggested Tests:</h3>*/}
      {/*  <ul>*/}
      {/*    {aResults.map((test, index) => (*/}
      {/*      <li key={index}>{test[1]}</li>*/}
      {/*    ))}*/}
      {/*  </ul>*/}
      {/*</div>*/}
      <div className="suggestionsContainer">
        <h3>Suggested Tests:</h3>
        <div className="suggestionsGrid">
          {aResults.map((test, index) => (
            <div key={index} className="suggestion-card">
              <h4>{test[1]}</h4>
              <p>{test[0]}</p>{" "}
              {/* если есть дополнительная информация, можно её отобразить */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SymptomsChecker;
