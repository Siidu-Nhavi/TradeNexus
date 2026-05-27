import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#333",
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            let label = context.label || "";
            let value = context.raw || 0;
            return `${label}: ₹${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="doughnut-chart">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
