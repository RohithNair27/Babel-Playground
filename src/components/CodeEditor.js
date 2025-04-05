import React, { useState } from "react";

function CodeEditor({ text, onChange }) {
  return (
    <textarea
      rows="15"
      onChange={(event) => onChange(event.target.value)}
      value={text}
    >
      {/* {text} */}
    </textarea>
  );
}

export default CodeEditor;
