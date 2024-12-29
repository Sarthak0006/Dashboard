import React from 'react';
import { Target, Utensils, MenuSquare, ChevronRight } from 'lucide-react';
import './QuickActions.css';

const actions = [
  {
    icon: <Target size={24} />,
    title: "Goals",
    description: "Track your targets"
  },
  {
    icon: <Utensils size={24} />,
    title: "Popular Dishes",
    description: "Most ordered items"
  },
  {
    icon: <MenuSquare size={24} />,
    title: "Menus",
    description: "Manage your menus"
  }
];

export default function QuickActions() {
  return (
    <div className="quick-actions-card">
      <h2 className="quick-actions-title">Quick Actions</h2>
      <div className="quick-actions-list">
        {actions.map((action, index) => (
          <div key={index} className="action-item">
            <div className="action-icon">{action.icon}</div>
            <div className="action-content">
              <h3>{action.title}</h3>
              <p>{action.description}</p>
            </div>
            <ChevronRight className="action-arrow" size={20} />
          </div>
        ))}
      </div>
    </div>
  );
}

