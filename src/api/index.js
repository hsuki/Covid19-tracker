import axios from 'axios';

export const fetchCurrent = async () => {
  const url = 'https://api.covidtracking.com/v1/us/current.json';
  try {
    const {
      data: [{ positive, recovered, death, lastModified }],
    } = await axios.get(url);

    return { currentData: { positive, recovered, death, lastModified } };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDaily = async () => {
  const url = 'https://api.covidtracking.com/v1/us/daily.json';
  try {
    const { data } = await axios.get(url);
    return data.map((dailyData) => ({
      positive: dailyData.positive,
      recovered: dailyData.recovered,
      death: dailyData.death,
      lastModified: dailyData.lastModified,
    }));
  } catch (error) {
    console.log(error);
  }
};

export const fetchStates = async () => {
  const url = 'https://api.covidtracking.com/v1/states/info.json';
  try {
    const { data } = await axios.get(url);
    return data.map((data) => data.state);
  } catch (error) {
    console.log(error);
  }
};

export const fetchState = async (state) => {
  const url = `https://api.covidtracking.com/v1/states/${state}/current.json`;
  try {
    const {
      data: { positive, recovered, death },
    } = await axios.get(url);

    return { positive, recovered, death };
  } catch (error) {
    console.log(error);
  }
};

// https://api.covidtracking.com/v1/states/{state}/current.json

// https://api.covidtracking.com/v1/states/{state}/daily.json
