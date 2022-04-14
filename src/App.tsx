import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';

import Header from './components/header/header.component';
import EarnPage from './pages/earn/earn.component';
import DashboardPage from './pages/dashboard/dashboard.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<EarnPage />}/>
          <Route path="/dashboard" element={<DashboardPage />}/>
        </Routes>
      </div>
      <Footer/>
    </div>   
  );
}

export default App;
