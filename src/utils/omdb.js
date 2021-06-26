import axios from 'axios';

// Set config defaults when creating the instance
export const movieAPIS = axios.create({
  baseURL: `http://www.omdbapi.com/`,
});

export const configAPI = {
  apikey: `faf7e5bb`
}