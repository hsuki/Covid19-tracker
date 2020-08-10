import React, { Component } from 'react';
import classes from './App.module.css';

import Cards from './Cards/Cards';
import Chart from './Chart/Chart';
import { fetchCurrentUS, fetchDailyUS } from './api';

class App extends Component {
  state = {
    currentData: {},
    dailyData: [],
  };

  async componentDidMount() {
    const { currentData } = await fetchCurrentUS();
    const dailyData = await fetchDailyUS();
    this.setState({
      currentData: {
        positive: currentData.positive,
        recovered: currentData.recovered,
        death: currentData.death,
        lastModified: currentData.lastModified,
      },
      dailyData: dailyData,
    });
  }

  render() {
    const currentData = this.state.currentData;
    const dailyData = this.state.dailyData;
    return (
      <div className={classes.Container}>
        <Cards currentData={currentData} />
        <Chart dailyData={dailyData} />
      </div>
    );
  }
}

export default App;
