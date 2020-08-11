import React, { Component } from 'react';
import classes from './App.module.css';
// import cx from 'classnames';

import Options from './Options/Options';
import Cards from './Cards/Cards';
import Chart from './Chart/Chart';
import {
  fetchCurrentUS,
  fetchDailyUS,
  fetchStates,
  fetchCurrentState,
  fetchDailyState,
} from './api';

class App extends Component {
  state = {
    localNationalCurrentData: {},
    currentData: {},
    localNationalDailyData: [],
    dailyData: [],
    statesData: [],
    isNational: true,
  };

  async componentDidMount() {
    const { currentData } = await fetchCurrentUS();
    const dailyData = await fetchDailyUS();
    const statesData = await fetchStates();
    this.setState({
      currentUsData: {
        positive: currentData.positive,
        recovered: currentData.recovered,
        death: currentData.death,
        lastModified: currentData.lastModified,
      },
      dailyData: dailyData,
      statesData: statesData,
      localNationalCurrentData: { ...currentData },
      localNationalDailyData: [...dailyData],
    });
  }

  handleStateSelectionChange = async (state) => {
    const currentStateData = await fetchCurrentState(state);
    this.setState({
      currentData: {
        state: state,
        positive: currentStateData.positive,
        recovered: currentStateData.recovered,
        death: currentStateData.death,
        lastModified: currentStateData.dateModified,
      },
    });

    if (state) {
      const dailyStateData = await fetchDailyState(state);
      // console.log(dai);
      this.setState({ isNational: false, dailyData: dailyStateData });
    } else {
      this.setState({ isNational: true });
    }
  };

  render() {
    const currentData = this.state.currentData;
    const localNationalCurrentData = this.state.localNationalCurrentData;
    const dailyData = this.state.dailyData;
    const reversedDailyData = [...dailyData].reverse();
    const localNationalDailyData = this.state.localNationalDailyData;
    const reversedLocalNationalDailyData = [
      ...localNationalDailyData,
    ].reverse();
    const states = this.state.statesData;
    const isNational = this.state.isNational;

    return (
      <div className={classes.Root}>
        <div className={classes.Left}>
          <Cards
            currentUsData={isNational ? localNationalCurrentData : currentData}
          />
        </div>
        <div className={classes.Right}>
          <Options
            handleStateSelectionChange={this.handleStateSelectionChange}
            states={states}
          />
          <Chart
            dailyData={
              isNational ? reversedLocalNationalDailyData : reversedDailyData
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
