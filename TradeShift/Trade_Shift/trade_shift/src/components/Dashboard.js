import React from "react";
import "../App.css"; // App.css src/ এ

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="logo">TradeShift</div>
        <ul className="menu">
          <li>Portfolio</li>
          <li>Watchlist</li>
          <li>Orders</li>
          <li>Analytics</li>
          <li>Settings</li>
        </ul>
      </div>

      <div className="main">
        <div className="header">
          <h2>Welcome, Investor!</h2>
          <button className="logout">Logout</button>
        </div>

        <div className="cards">
          <div className="card">
            <h3>Total Portfolio Value</h3>
            <p>$25,430.00</p>
          </div>
          <div className="card">
            <h3>Profit / Loss</h3>
            <p style={{ color: "green" }}>+ $1,230.00</p>
          </div>
          <div className="card">
            <h3>Today's Change</h3>
            <p style={{ color: "red" }}>- $120.00</p>
          </div>
        </div>

        <div className="chart-section">
          <h3>Portfolio Performance</h3>
          <div className="chart-placeholder">[ Chart Placeholder ]</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
