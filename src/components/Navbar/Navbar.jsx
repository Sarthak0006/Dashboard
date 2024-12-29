import React from "react";
import { Search, Bell, Settings, Mail } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-search">
        <Search size={20} />
        <input type="text" placeholder="Search" />
      </div>
      <div className="nav-actions">
        <div className="nav-button">
          <Mail size={20} />
        </div>
        <div className="nav-button">
          <Settings size={20} />
        </div>
        <button className="nav-button">
          <Bell size={20} />
        </button>
        <div className="nav-profile">
          <img src="images/img2.jpg" alt="Profile" width="32" height="32" />
        </div>
      </div>
    </nav>
  );
}
