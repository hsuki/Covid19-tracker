import axios from 'axios';

export const fetchCurrentUS = async () => {
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

export const fetchDailyUS = async () => {
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
