
import axios from 'axios';

const API_URL = '/api/playlists';

const getUserPlaylists = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export default { getUserPlaylists };
