import React from 'react';
import classes from './Chart.module.css';

import { Line, Bar, HorizontalBar } from 'react-chartjs-2';

const Chart = ({ dailyData }) => {
  const lineChart = (
    <Line
      className={classes.Chart}
      data={{
        labels: dailyData.map((dailyData) =>
          new Date(dailyData.lastModified).toDateString()
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
    />
  );

  return (
    <div className={classes.Container}>
      <div className={classes.Option}>options</div>
      <div className={classes.Chart}>{lineChart}</div>
    </div>
  );
};

export default Chart;
