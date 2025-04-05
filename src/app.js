import React, { useState } from "react";

import CodeEditor from "./components/CodeEditor";
import PresetSelector from "./components/PresetSelector";

import { IoCode, IoSettings } from "react-icons/io5";
import { VscDebugStart } from "react-icons/vsc";

import "./app.css";

function App() {
  let [userInput, setUserInput] = useState(
    "const element = <h1>Hello,world!</h1>"
  );
  return (
    <div className="container">
      <div className="box">
        <div className="container-header-container">
          <IoCode size={35} color="#059669" />
          <h1>Webpack and Babel Unpacked</h1>
        </div>
        <span>Understand webpack and babel</span>
        <div className="input-box">
          <h2>Code Transformer</h2>
          <CodeEditor text={userInput} />
          <div className="button-container">
            <PresetSelector />
            <button>
              <VscDebugStart />
              Convert
            </button>
          </div>
        </div>
      </div>
      <span className="settings">
        <IoSettings />
        Configure additional settings in the preset selector
      </span>
    </div>
  );
}

export default App;
