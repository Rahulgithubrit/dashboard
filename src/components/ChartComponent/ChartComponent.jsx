import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useSelector } from 'react-redux';
import './ChartComponent.css';

const ChartComponent = () => {
  const chartData = useSelector((state) => state.chart.data);

  return (
    <div className="chart-container">
      <div className="chart-item">
        <h2>Bar Chart</h2>
        <Bar data={chartData} />
      </div>
      <div className="chart-item">
        <h2>Line Chart</h2>
        <Line data={chartData} />
      </div>
      <div className="chart-item">
        <h2>Pie Chart</h2>
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default ChartComponent;