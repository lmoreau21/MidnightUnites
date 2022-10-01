import React from "react";
import FrameOne from "./pages/FrameOne";
import MacBookPro16One from "./pages/MacBookPro16One";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/MidnightUnites" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<MacBookPro16One />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
