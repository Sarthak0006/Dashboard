import React from 'react';
import './RecentOrders.css';

const orders = [
  { customer: { name: 'Wade Warren', image: 'images/img4.jpg' }, orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
  { customer: { name: 'Jane Cooper', image: 'images/img3.jpg' }, orderNo: '48965786', amount: '$365.02', status: 'Delivered' },
  { customer: { name: 'Guy Hawkins', image: 'images/img1.jpg' }, orderNo: '78958215', amount: '$45.88', status: 'Cancelled' },
  { customer: { name: 'Kristin Watson', image: 'images/img5.jpg' }, orderNo: '20965732', amount: '$65.00', status: 'Pending' },
  { customer: { name: 'Cody Fisher', image: 'images/img6.jpg' }, orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
];

export default function RecentOrders() {
  return (
    <div className="recent-orders">
      <h2>Recent Orders</h2>
      <div className="orders-table">
        <div className="table-header">
          <span>Customer</span>
          <span>Order No.</span>
          <span>Amount</span>
          <span>Status</span>
        </div>
        {orders.map((order, index) => (
          <div key={order.orderNo} className="table-row">
            <div className="customer-info">
              <img src={order.customer.image} alt={order.customer.name} />
              <span>{order.customer.name}</span>
            </div>
            <span>{order.orderNo}</span>
            <span>{order.amount}</span>
            <span className={`status ${order.status.toLowerCase()}`}>
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

