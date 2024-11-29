"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip
);

const Chart = () => {
  const data = {
    labels: [
      "2000",
      "2001",
      "2002",
      "2003",
      "2004",
      "2005",
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
    ],
    datasets: [
      {
        label: "Artprice100",
        data: [
          100, 111, 112, 123, 145, 164, 179, 231, 320, 281, 235, 303, 355, 334,
          385, 452, 489, 397, 437, 460, 480, 506, 608, 709, 720,
        ],
        borderColor: "rgb(0, 102, 204)",
        backgroundColor: "rgba(0, 102, 204, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "S&P 500",
        data: [
          100, 90, 78, 76, 82, 85, 97, 101, 87, 86, 97, 120, 140, 153, 172, 180,
          224, 202, 256, 234, 260, 243, 260, 323, 333,
        ],
        borderColor: "rgb(204, 0, 0)",
        backgroundColor: "rgba(204, 0, 0, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "STOXX Europe 50",
        data: [
          100, 100, 82, 55, 59, 62, 76, 81, 80, 49, 58, 58, 54, 58, 65, 67, 68,
          71, 62, 76, 69, 86, 84, 91, 91,
        ],
        borderColor: "rgb(128, 128, 128)",
        backgroundColor: "rgba(128, 128, 128, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#333",
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#fff",
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#333",
        },
      },
      x: {
        ticks: {
          color: "#333",
        },
      },
    },
  };

  return (
    <div className="mx-auto p-4 bg-white shadow-lg rounded-lg w-[89vw]">
      <h2 className="text-lg md:text-xl font-bold mb-4 abril-fatface">
        Artprice100 vs. S&P 500 and STOXX Europe 50 - Base 100 in January 2000
      </h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
