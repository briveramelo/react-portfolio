import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { usePlausibleTracking } from "./utils/tracking/usePlausibleTracking";
import { MainLayout } from "./pages/MainLayout";

function App() {
  usePlausibleTracking();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects/*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
