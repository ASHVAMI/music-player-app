import axios from 'axios';

const API_URL = '/api/songs';

const getAllSongs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export default { getAllSongs };
