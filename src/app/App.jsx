import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import StatsCard from "../components/StatsCard/StatsCard";
import NetProfitCard from "../components/NetProfitCard/NetProfitCard";
import ActivityChart from "../components/ActivityChart/ActivityChart";
import RecentOrders from "../components/RecentOrders/RecentOrders";
import CustomerFeedback from "../components/CustomerFeedback/CustomerFeedback";
import QuickActions from "../components/QuicActions/QuickActions";
import { ShoppingCart, CheckCircle, XCircle, DollarSign } from "lucide-react";
import "./App.css";

export default function App() {
  const stats = [
    {
      icon: <ShoppingCart size={24} />,
      title: "Total Orders",
      value: "75",
      change: 3,
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Total Delivered",
      value: "70",
      change: -3,
    },
    {
      icon: <XCircle size={24} />,
      title: "Total Cancelled",
      value: "05",
      change: 3,
    },
    {
      icon: <DollarSign size={24} />,
      title: "Total Revenue",
      value: "$12k",
      change: -3,
    },
  ];

  return (
    <div className="app">
      <Sidebar />
      <div className="main-container">
        <Navbar />
        <main className="main-content">
          <h1>Dashboard</h1>
          <div className="main_grid__wrapper">
            <div className="main_grid__header">
              <div className="first">
                {stats.map((stat, index) => (
                  <StatsCard key={index} {...stat} />
                ))}
              </div>
              <NetProfitCard />
            </div>
            <div className="chart__wrapper">
              <ActivityChart />
              <QuickActions />
            </div>
            <div className="misc">
              <RecentOrders />
              <CustomerFeedback />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
