import React from "react";
import { Home, BarChart2, FileText, Lock, LogOut, Menu } from "lucide-react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Menu size={24} />
      </div>
      <div className="sidebar-items">
        <div className="sidebar-item active">
          <Home size={24} />
        </div>
        <div className="sidebar-item">
          <BarChart2 size={24} />
        </div>
        <div className="sidebar-item">
          <FileText size={24} />
        </div>
        <div className="sidebar-item">
          <Lock size={24} />
        </div>
      </div>
      <div className="sidebar-bottom">
        <div className="sidebar-item">
          <LogOut size={24} />
        </div>
      </div>
    </div>
  );
}
