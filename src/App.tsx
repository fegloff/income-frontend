import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import EarnPage from "./pages/earn/earn.component";
import DashboardPage from "./pages/dashboard/dashboard.component";
import Footer from "./components/footer/footer.component";
import "./App.scss";

const App: React.FC = () => {
  let [isActive, setActive] = useState<boolean>(false);

  const updateState = (state: boolean): void => {
    setActive(state);   
  };

  return (
    <div id="app" className={!isActive ? "light" : "dark"}>
      <Header state={isActive} updateState={updateState} />
      <div className="container">
        <Routes>
          <Route path="/" element={<EarnPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
