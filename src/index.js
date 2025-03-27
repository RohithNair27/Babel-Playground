import React from "react";
import { createRoot } from "react-dom/client";

function Index() {
  return (
    <div>
      <span>This works</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Index />);

// export default Index;
