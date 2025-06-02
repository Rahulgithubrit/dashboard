import React from 'react';
import ChartComponent from '../components/ChartComponent/ChartComponent';
import { FaUsers, FaShoppingCart, FaDollarSign, FaChartBar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Dashboard.css';

const Dashboard = () => {
  // Sample data for metrics
  const metrics = [
    { 
      icon: <FaUsers className="metric-icon" />, 
      title: "Total Users", 
      value: "12,458", 
      change: "+12.5%", 
      isPositive: true 
    },
    { 
      icon: <FaShoppingCart className="metric-icon" />, 
      title: "Total Orders", 
      value: "3,287", 
      change: "+5.3%", 
      isPositive: true 
    },
    { 
      icon: <FaDollarSign className="metric-icon" />, 
      title: "Revenue", 
      value: "$48,752", 
      change: "+8.7%", 
      isPositive: true 
    },
    { 
      icon: <FaChartBar className="metric-icon" />, 
      title: "Conversion", 
      value: "3.42%", 
      change: "-0.8%", 
      isPositive: false 
    }
  ];

  // Recent activities data
  const activities = [
    { id: 1, user: "Sarah Johnson", action: "placed a new order", time: "5 min ago", amount: "$128.50" },
    { id: 2, user: "Michael Chen", action: "subscribed to premium", time: "22 min ago", amount: "$9.99/mo" },
    { id: 3, user: "Alex Rodriguez", action: "requested a refund", time: "1 hour ago", amount: "$45.00" },
    { id: 4, user: "Emily Wilson", action: "updated payment method", time: "2 hours ago", amount: "" },
    { id: 5, user: "David Kim", action: "completed onboarding", time: "3 hours ago", amount: "" }
  ];

  return (
    <div className="dashboard">
      {/* Header Section */}
      <motion.div 
        className="dashboard-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Dashboard Overview</h1>
        <p className="subtitle">Welcome back! Here's what's happening with your business today.</p>
      </motion.div>

      {/* Metrics Grid */}
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <motion.div 
            key={index}
            className="metric-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="metric-icon-container">
              {metric.icon}
            </div>
            <div className="metric-content">
              <h3>{metric.title}</h3>
              <p className="metric-value">{metric.value}</p>
              <p className={`metric-change ${metric.isPositive ? 'positive' : 'negative'}`}>
                {metric.change} {metric.isPositive ? '↑' : '↓'}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <motion.div 
        className="charts-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="section-header">
          <h2>Performance Analytics</h2>
          <div className="time-filter">
            <button className="active">Week</button>
            <button>Month</button>
            <button>Quarter</button>
            <button>Year</button>
          </div>
        </div>
        <ChartComponent />
      </motion.div>

      {/* Recent Activities */}
      <motion.div 
        className="activities-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2>Recent Activities</h2>
        <div className="activities-list">
          {activities.map(activity => (
            <div key={activity.id} className="activity-item">
              <div className="activity-avatar">
                {activity.user.charAt(0)}
              </div>
              <div className="activity-content">
                <p>
                  <span className="activity-user">{activity.user}</span> {activity.action}
                  {activity.amount && <span className="activity-amount">{activity.amount}</span>}
                </p>
                <p className="activity-time">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div 
        className="quick-stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="stats-card">
          <h3>Top Products</h3>
          <ul className="products-list">
            <li>
              <span className="product-name">Premium Widget</span>
              <span className="product-sales">1,284 sold</span>
            </li>
            <li>
              <span className="product-name">Basic Widget</span>
              <span className="product-sales">982 sold</span>
            </li>
            <li>
              <span className="product-name">Deluxe Package</span>
              <span className="product-sales">756 sold</span>
            </li>
          </ul>
        </div>
        <div className="stats-card">
          <h3>Traffic Sources</h3>
          <div className="traffic-source">
            <div className="source-item">
              <span className="source-name">Organic Search</span>
              <div className="source-bar-container">
                <div className="source-bar" style={{ width: '45%' }}></div>
              </div>
              <span className="source-percent">45%</span>
            </div>
            <div className="source-item">
              <span className="source-name">Direct</span>
              <div className="source-bar-container">
                <div className="source-bar" style={{ width: '28%' }}></div>
              </div>
              <span className="source-percent">28%</span>
            </div>
            <div className="source-item">
              <span className="source-name">Social</span>
              <div className="source-bar-container">
                <div className="source-bar" style={{ width: '15%' }}></div>
              </div>
              <span className="source-percent">15%</span>
            </div>
            <div className="source-item">
              <span className="source-name">Referral</span>
              <div className="source-bar-container">
                <div className="source-bar" style={{ width: '12%' }}></div>
              </div>
              <span className="source-percent">12%</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;