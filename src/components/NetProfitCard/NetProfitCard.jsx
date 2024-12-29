import React from 'react';
import { TrendingUp } from 'lucide-react';
import './NetProfitCard.css';

export default function NetProfitCard() {
  return (
    <div className="net-profit-card">
      <div className="net-profit-info">
        <h3>Net Profit</h3>
        <div className="net-profit-value" style={{fontSize: 'normal'}}> $6,759.25</div>
        <div className="net-profit-change">
          <TrendingUp size={14} />
          <span style={{fontSize: 'smaller'}}>3%</span>
        </div>
      </div>
      <div className="net-profit-chart">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="#1a1d21"
            strokeWidth="12"
          />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="#4a7dff"
            strokeWidth="12"
            strokeDasharray="339.24"
            strokeDashoffset="101.772"
            transform="rotate(-90 60 60)"
          />
        </svg>
        <span className="net-profit-percentage">70%</span>
      </div>
    </div>
  );
}

