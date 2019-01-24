import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.tvmaze.com',
  timeout: 1000
});

export default {
  getShows(title) {
    return apiClient.get(`/search/shows?q=${title}`);
  },
  getEpisodes(showId) {
    return apiClient.get(`shows/${showId}/episodes`);
  },
  getSeasons(showId) {
    return apiClient.get(`shows/${showId}/seasons`);
  }
}