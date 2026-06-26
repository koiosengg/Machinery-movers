import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash";

// Lazy-loaded routes for code-splitting
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const HeavyMachineLiftingAndShifting = lazy(() => import("./components/Services/HeavyMachineLiftingAndShifting"));
const MachineryLoadingAndUnloading = lazy(() => import("./components/Services/MachineryLoadingAndUnloading"));
const MachineryInstallation = lazy(() => import("./components/Services/MachineryInstallation"));
const MachineryDismantling = lazy(() => import("./components/Services/MachineryDismantling"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />
      <Suspense fallback={
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "1.2rem",
          fontWeight: "600",
          color: "#030f27",
          fontFamily: "Plus Jakarta Sans, sans-serif"
        }}>
          Loading...
        </div>
      }>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route
              path="services/heavy-machine-lifting-and-shifting"
              element={<HeavyMachineLiftingAndShifting />}
            />
            <Route
              path="services/machinery-loading-and-unloading"
              element={<MachineryLoadingAndUnloading />}
            />
            <Route
              path="services/machinery-installation"
              element={<MachineryInstallation />}
            />
            <Route
              path="services/machinery-dismantling"
              element={<MachineryDismantling />}
            />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
