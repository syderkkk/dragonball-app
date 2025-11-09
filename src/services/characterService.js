import axiosInstance from './axios.config';

export const characterService = {
  getAllCharacters: async (page = 1, limit = 10) => {
    const response = await axiosInstance.get(`/characters?page=${page}&limit=${limit}`);
    return response.data;
  },

  getCharacterById: async (id) => {
    const response = await axiosInstance.get(`/characters/${id}`);
    return response.data;
  },

  searchCharacters: async (name) => {
    const response = await axiosInstance.get(`/characters?name=${name}`);
    return response.data;
  },

  filterByRace: async (race) => {
    const response = await axiosInstance.get(`/characters?race=${race}`);
    return response.data;
  },

  filterCharacters: async (name = '', race = '') => {
    let url = '/characters?';
    if (name) url += `name=${name}`;
    if (race) {
    if (name) url += '&';
    url += `race=${race}`;
    }
    const response = await axiosInstance.get(url);
    return response.data;
  }
};