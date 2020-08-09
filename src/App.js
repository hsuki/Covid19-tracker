import React, { Component } from 'react';
import classes from './App.module.css';

import Cards from './Cards/Cards';
import Chart from './Chart/Chart';
import { fetchNationalData } from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  async componentDidMount() {
    const {
      data: [{ positive, recovered, death, lastModified }],
    } = await fetchNationalData();
    this.setState({ data: { positive, recovered, death, lastModified } });
  }

  render() {
    const currentData = this.state.data;
    return (
      <div className={classes.Container}>
        <Cards currentData={currentData} />
        <Chart />
      </div>
    );
  }
}

export default App;
