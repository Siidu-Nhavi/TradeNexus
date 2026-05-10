import React from "react";
import { Route, Routes } from "react-router-dom";
import '../../src/index.css';

// Import all page components
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Left sidebar showing watchlist of stocks */}
      <WatchList />
      
      {/* Main content area with routing */}
      <div className="content">
        <Routes>
          {/* Default dashboard/summary page */}
          <Route exact path="/" element={<Summary />} />
          
          {/* Orders page - displays all placed orders */}
          <Route path="/orders" element={<Orders />} />
          
          {/* Holdings page - displays user's stock holdings */}
          <Route path="/holdings" element={<Holdings />} />
          
          {/* Positions page - displays open trading positions */}
          <Route path="/positions" element={<Positions />} />
          
          {/* Funds page - manage account funds (add/withdraw) */}
          <Route path="/funds" element={<Funds />} />
          
          {/* Apps page - third-party integrations */}
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;