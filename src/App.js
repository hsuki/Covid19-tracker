import React, { Component } from 'react';
import classes from './App.module.css';
// import cx from 'classnames';

import Options from './Options/Options';
import Cards from './Cards/Cards';
import Chart from './Chart/Chart';
import { fetchCurrent, fetchDaily, fetchStates, fetchState } from './api';

class App extends Component {
  state = {
    currentData: {},
    dailyData: [],
    statesData: [],
    currentStateData: {},
    isNational: true,
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

  handleChange = async (state) => {
    const data = await fetchState(state);

    this.setState({
      currentStateData: {
        state: state,
        positive: data.positive,
        recovered: data.recovered,
        death: data.death,
      },
    });

    state
      ? this.setState({ isNational: false })
      : this.setState({ isNational: true });
  };

  render() {
    const currentData = this.state.currentData;
    const dailyData = this.state.dailyData;
    const reversedDailyData = [...dailyData].reverse();
    const states = this.state.statesData;
    const currentStateData = this.state.currentStateData;
    const isNational = this.state.isNational;
    return (
      <div className={classes.Root}>
        <div className={classes.Left}>
          <Cards currentData={currentData} />
        </div>
        <div className={classes.Right}>
          <Options
            handleChange={this.handleChange}
            states={states}
            isNational={isNational}
          />
          <Chart
            dailyData={reversedDailyData}
            currentStateData={currentStateData}
          />
        </div>
      </div>
    );
  }
}

export default App;
