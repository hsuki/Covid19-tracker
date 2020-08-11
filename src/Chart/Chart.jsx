import React from 'react';
import classes from './Chart.module.css';

import { Line, HorizontalBar } from 'react-chartjs-2';

const Chart = ({ dailyData }) => {
  const lineChart = (
    <Line
      className={classes.Chart}
      data={{
        labels: dailyData.map((dailyData) =>
          new Date(dailyData.lastModified).toLocaleDateString()
        ),
        datasets: [
          {
            data: dailyData.map((dailyData) => dailyData.positive),
            label: 'Confirmed',
            borderColor: 'rgba(0, 0, 255, 0.5)',
          },
          {
            data: dailyData.map((dailyData) => dailyData.recovered),
            label: 'Recovered',
            borderColor: 'rgba(0, 255, 0, 0.5)',
          },
          {
            data: dailyData.map((dailyData) => dailyData.death),
            label: 'Death',
            borderColor: 'rgba(255, 0, 0, 0.5)',
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          text: `Current State of COVID-19`,
        },
      }}
    />
  );

  return (
    <div className={classes.Container}>
      <div className={classes.Chart}>{lineChart}</div>
    </div>
  );
};

export default Chart;
