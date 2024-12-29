import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './ActivityChart.css';

export default function ActivityChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Array.from({ length: 23 }, (_, i) => i + 5),
        datasets: [{
          label: 'Activity',
          data: Array.from({ length: 23 }, () => Math.floor(Math.random() * 15000)),
          backgroundColor: '#4a7dff',
          borderRadius: 10,
          barThickness: 20,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
            ticks: {
              color: '#8b949e',
              callback: (value) => `${value / 1000}k`
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#8b949e'
            }
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="activity-chart">
      <div className="chart-header">
        <h2>Activity</h2>
        <select className="chart-select">
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>
      <div className="chart-container">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}

