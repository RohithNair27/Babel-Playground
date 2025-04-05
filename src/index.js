import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

function Index() {
  return <App />;
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Index />);

// export default Index;
