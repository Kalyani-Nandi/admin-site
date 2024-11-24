import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ChartOne = () => {
  const [series] = useState([
    {
      name: "Product One",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
    },
    {
      name: "Product Two",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
    },
  ]);

  const options = {
    legend: { show: false },
    colors: ["#3C50E0", "#80CAEE"],
    chart: {
      type: "area",
      toolbar: { show: false },
    },
    stroke: { width: 2, curve: "straight" },
    xaxis: {
      categories: [
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
      ],
    },
    yaxis: {
      min: 0,
      max: 100,
    },
    grid: {
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: true } },
    },
    dataLabels: { enabled: false },
  };

  return (
    <div className="p-5 rounded shadow bg-white dark:bg-boxdark w-full">
      <h4 className="mb-4 text-lg font-bold">Revenue vs Sales</h4>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={250}
      />
    </div>
  );
};

export default ChartOne;
