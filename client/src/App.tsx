import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Reset Style & Common Styles
import { GlobalStyle } from "./styles/GlobalStyle";

// My Components
import { IndexPageComponent } from "./components/pages/IndexPageComponent";

export const App: React.VFC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<IndexPageComponent />} />
      </Routes>
    </Router>
  );
};
