import React, { Component } from 'react';
import classes from './App.module.css';
import cx from 'classnames';

import Options from './Options/Options';
import Cards from './Cards/Cards';
import Chart from './Chart/Chart';
import { fetchCurrent, fetchDaily, fetchStates } from './api';

class App extends Component {
  state = {
    currentData: {},
    dailyData: [],
    statesData: [],
  };

  async componentDidMount() {
    const { currentData } = await fetchCurrent();
    const dailyData = await fetchDaily();
    const statesData = await fetchStates();
    this.setState({
      currentData: {
        positive: currentData.positive,
        recovered: currentData.recovered,
        death: currentData.death,
        lastModified: currentData.lastModified,
      },
      dailyData: dailyData,
      statesData: statesData,
    });
  }

  render() {
    const currentData = this.state.currentData;
    const dailyData = this.state.dailyData;
    const reversedDailyData = [...dailyData].reverse();
    return (
      <div className={classes.Root}>
        <div className={classes.Left}>
          <Cards currentData={currentData} />
        </div>
        <div className={classes.Right}>
          <Options />
          <Chart dailyData={reversedDailyData} />
        </div>
      </div>
    );
  }
}

export default App;
