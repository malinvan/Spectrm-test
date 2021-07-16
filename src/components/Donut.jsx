import React from "react";

// APEXCHARTS
import ReactApexCharts from "react-apexcharts";

export const Donut = ({ data }) => {
  // Retrieving and iterating over the chart information to be able to interpolate it into each individual Donut
  const series = data.data.map((item) => item.value);
  const labels = data.data.map((item) => item.label);
  const totalLabel = data.totalLabel.toUpperCase();

  // Using the JS reducer function to summarize the values
  const totalValue = series.reduce((acc, value) => acc + value);

  // Donut
  const options = {
    chart: {
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              fontWeight: "bold",
              fontSize: "35px",
              size: 200,
              label: totalValue,
              formatter: (w) => totalLabel,
            },
          },
        },
      },
    },
    legend: {
      fontSize: "16px",
      fontWeight: 600,
      offsetY: 0,
      offsetX: -30,
      width: 250,
      markers: {
        width: 16,
        height: 16,
        offsetX: -10,
        colors: ["#c4366f", "#85adff", "#502579"],
      },
      itemMargin: {
        vertical: 10,
      },
    },
    labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 600,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    // Changing the global colours to the colours of the template
    colors: ["#c4366f", "#85adff", "#502579"],
  };

  return (
    <div id="chart">
      <ReactApexCharts
        options={options}
        series={series}
        type="donut"
        width={600}
        height={800}
      />
    </div>
  );
};
