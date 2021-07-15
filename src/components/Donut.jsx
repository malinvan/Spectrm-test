import React from 'react'

// APEXCHARTS
import ReactApexCharts from 'react-apexcharts';

export const Donut = ({
  data
}) => {
  const series = data.data.map((item) => item.value);
  const labels = data.data.map((item) => item.label);
  const totalLabel = data.totalLabel.toUpperCase();
  const totalValue = series.reduce((acc, value) => acc + value);

  const options = {
    title: {
      text: data.title,
      align: 'left',
      margin: 30,
      style: {
        fontSize: '22px',
        fontWeight: 'bold'
      }
    },
    chart: {
      type: 'donut',
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
              fontWeight: 'bold',
              fontSize: '40px',
              size: 200,
              label: totalValue,
              formatter: (w) => totalLabel
            },
          }
        }
      }
    },
    legend: {
      fontSize: '20px',
      fontWeight: 600,
      offsetY: 60,
      offsetX: -60,
      width: 250,
      markers: {
        width: 16,
        height: 16,
        offsetX: -10
      },
      itemMargin: {
        vertical: 13
      },
    },
    labels,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 600
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    theme: {
      palette: 'palette3'
    }
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