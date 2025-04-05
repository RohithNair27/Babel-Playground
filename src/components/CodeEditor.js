import React, { useState } from "react";

function CodeEditor({ text }) {
  return <textarea rows="15">{text}</textarea>;
}

export default CodeEditor;
