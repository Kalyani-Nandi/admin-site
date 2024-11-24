import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ChartTwo = () => {
  const [chartData] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
        height: 120,
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10,
        },
      },
      grid: {
        padding: {
          bottom: -80,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div className="rounded-sm border border-stroke bg-white py-0 px-7.5 dark:border-strokedark dark:bg-boxdark w-full">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        height={200}
        type="donut"
      />
    </div>
  );
};

export default ChartTwo;
