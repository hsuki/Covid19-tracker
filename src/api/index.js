import axios from 'axios';

export const fetchNationalData = async () => {
  const url = 'https://api.covidtracking.com/v1/us/current.json';
  try {
    const data = await axios.get(url);

    return data;
  } catch (error) {
    console.log(error);
  }
};
