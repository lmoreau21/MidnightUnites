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
        <Route path="/MidnightUnites/macbookpro16one" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/macbookpro16one" element={<MacBookPro16One />} />
        <Route path="/frameone" element={<FrameOne />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
