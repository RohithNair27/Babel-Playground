import React from "react";
import "../app.css";

function PresetSelector({ onChange }) {
  return (
    <div className="preset-container">
      <label for="options">Babel Preset </label>
      <select
        id="options"
        name="Preset"
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="react" selected>
          @babel/preset-react
        </option>

        <option value="env">@babel/preset-env</option>
        <option value="typescript">@babel/preset-typescript</option>
        <option value="flow">@babel/preset-flow</option>
        <option value="plugin-transform-arrow-functions">
          @babel/plugin-transform-arrow-functions
        </option>
        {/* <option value="plugin-proposal-class-properties">
          @babel/plugin-proposal-class-properties
        </option> */}
        {/* <option value="minify">babel-preset-minify</option> */}
      </select>
    </div>
  );
}

export default PresetSelector;
