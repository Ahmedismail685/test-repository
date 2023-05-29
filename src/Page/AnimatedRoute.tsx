import { motion } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

function AnimatedRoute() {
  const location = useLocation();

  const PageNotFound = (
    <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="PageNotFound">
      Page Not found <code className="notfound"> 404</code>
    </motion.h3>
  );

  const HomePage = (
    <h2>
      Helloe in home !! <span>Page</span>
    </h2>
  );

  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={HomePage} />
      <Route path="/about" element={<h2>Helloe about</h2>} />
      <Route path="*" element={PageNotFound} />
    </Routes>
  );
}

export default AnimatedRoute;
