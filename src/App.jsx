import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import PersonalProfile from "./pages/PersonalProfile";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal-profile" element={<PersonalProfile />} />
        </Routes>
      </div>
      <ScrollToTop />
      <Analytics />
    </Router>
  );
};

export default App;
