import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { IndexPageComponent } from "./components/pages/IndexPageComponent";

export const App: React.VFC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <IndexPageComponent />
        </Route>
      </Routes>
    </Router>
  );
};
