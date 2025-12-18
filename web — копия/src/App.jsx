import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegionContext } from "./context/RegionContext";
import HomePage from "./pages/HomePage/HomePage";
import ComparePage from "./pages/ComparePage/ComparePage";
import RegionIndicatorsPage from "./pages/RegionIndicatorsPage/RegionIndicatorsPage";
import Layout from "./shared/Layout/Layout";

const App = () => {
  const [region, setRegion] = useState("Республика Алтай");

  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <HomePage />
            </Layout>
          } />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/indicators" element={<RegionIndicatorsPage />} />
          <Route path="*" element={
            <Layout>
              <HomePage />
            </Layout>
          } />
        </Routes>
      </Router>
    </RegionContext.Provider>
  );
}

export default App
