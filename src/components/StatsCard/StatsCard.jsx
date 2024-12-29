import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import "./StatsCard.css";

export default function StatsCard({ icon, title, value, change }) {
  const isPositive = change > 0;

  return (
    <div className="stats-card">
      <div>
        <div className="stats-icon">{icon}</div>
        <div className="stats-info">
          <h3>{title}</h3>
          <div className="stats-value" style={{ fontSize: "normal" }}>
            {value}
          </div>
        </div>
      </div>
      <div
        className={`stats-change ${isPositive ? "positive" : "negative"}`}
        style={{ fontSize: "smaller" }}
      >
        {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
        {Math.abs(change)}%
      </div>
    </div>
  );
}
