import React from "react";
import "./selector.css"

function Selector({ label, options, value, onChange, required = false }) {
    return (
        <div className="inputGroup">
            <select
                id={label.toLowerCase()}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={required}
            >
                <option value="">Select {label}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Selector;
