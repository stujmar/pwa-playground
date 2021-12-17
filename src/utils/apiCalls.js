import axios from 'axios';

// Fetches the data from the API
export const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
}