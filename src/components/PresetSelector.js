import React from "react";
import "../app.css";

function PresetSelector() {
  return (
    <div className="preset-container">
      <label for="options">Babel Preset </label>
      <select id="options">
        <option>@babel</option>
        <option>@babel</option>
        <option>@babel</option>
      </select>
    </div>
  );
}

export default PresetSelector;
